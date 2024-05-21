import { PhoneArrowDownLeftIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { PrismaClient } from '@prisma/client';
import { LoaderFunction } from '@remix-run/node';
import { Link, Outlet, useLoaderData, useNavigate } from '@remix-run/react';
import { useState } from 'react';
import HomeEdit from './users.edit';
import AddUserModal from './users.add';
import LogoDog from "~/images/logoDog.png"

export const loader: LoaderFunction = async () => {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany({
    include: {
      address: true,
      pet: true,
    },
  })

  return { users };
};

const GetUsers: React.FC = () => {
  const { users } = useLoaderData<{ users: UserType[] }>();
  console.log('users', users)

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>();

  const openEditModal = (user: UserType) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
    setIsAddModalOpen(false);
  };

  const deleteUser = async (id: string) => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (!isConfirmed) {
      return alert("Not Deleted")
    }

      const blob = new Blob([JSON.stringify({ id })], { type: 'application/json' });
      const response = await fetch('http://localhost:5173/users/del', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: blob
      });

      if (response.ok) {
        console.log("delete successfully!");
        navigate('/users');

      } else {
        const result = await response.json();
        console.error("Failed to add user:", result.error);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }

  }

  return (
    <>
      <Outlet/>
    <main>
      <button
        onClick={openAddModal}
        className="mb-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add New User
      </button>
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="rounded-lg w-full max-h-[110vh] overflow-y-auto sm:overflow-y-visible p-4 sm:p-0 sm:bottom-0 sm:top-0 sm:m-0 sm:rounded sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:mt-4">
          <AddUserModal closeModal={closeModal} />
        </div>
        </div>
      )}
      {isModalOpen && (
         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
         <div className="rounded-lg w-full max-h-[110vh] overflow-y-auto sm:overflow-y-visible p-4 sm:p-0 sm:bottom-0 sm:top-0 sm:m-0 sm:rounded sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:mt-4">
            <HomeEdit user={selectedUser} closeModal={closeModal} />
          </div>
        </div>
      )}
      <ul role="list" className="divide-y divide-gray-100">
        {users?.map((user) => {
          const latestAddress = user?.address;
          const latestPet = user?.pet;
        
          return (
            <li key={user.email} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4  dark:text-white  ">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50 border-solid border-black border-1" 
                src={(user.gender === "female") ?
                ("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp")
                :
                ("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp")}
                 alt="userImage" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white ">
                    <Link to={`./${user.id}`}>
                      {user.firstName} {user.lastName} | {latestAddress?.city}
                    </Link>
                  </p>
                  <div className="flex items-center space-x-1.5">
                    <PhoneArrowDownLeftIcon className="h-3 w-3 text-gray-500" />
                    <span className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-white "> {user.phoneNumber}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <img className="h-6 w-6 flex-none rounded-full bg-gray-50" 
                    src={LogoDog} 
                    alt="logoDog" />
                    <span className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-white dark:bg-black">
                      {latestPet?.name} | {latestPet?.breed} {latestPet?.species}
                    </span>
                    <div className='m-2'>
                      <button onClick={() => openEditModal(user)} className="text-sm font-medium text-indigo-600 hover:text-indigo-500 display block">
                        <PencilSquareIcon className='display block  h-5 w-5' />
                      </button>
                    </div>
                    <div className='m-2'>
                      <button onClick={() => deleteUser(user.id)} className="text-sm font-medium display block text-red-600 hover:text-red-500">
                        <TrashIcon className='display block h-5 w-5' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 dark:text-white dark:bg-black">{user.email}</p>
              </div>
            </li>
          )
        }
        )}
      </ul>
    </main>
    </>
  );
}

export default GetUsers;