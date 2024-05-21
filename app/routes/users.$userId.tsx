import { XCircleIcon } from "@heroicons/react/24/outline";
import { PrismaClient, User } from "@prisma/client";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Outlet, json, useLoaderData, useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";
import GetPet from "~/components/PetComponent";
import GetUserInfo from "~/components/UserComponent";

const prisma = new PrismaClient();

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.userId, "Missing userId param");
  debugger
  console.log(params);

  const user = await prisma.user.findUnique({
    where: {
      'id': params.userId,
    },
    include: {
      address: true,
      pet: true,
    },
  });

  if (!user) {
    throw new Response("User not found", { status: 404 });
  }

  return json({ user });
};

const UserData: React.FC = () => {
  const { user } = useLoaderData<{ user: UserType & { address: any, pet: any } }>();
  const navigate = useNavigate();

  const GoBack  =()=>{
    navigate('/users')
  }

  if (!user) {
    return <p>No user found</p>;
  }

  return (
    <div className="text-gray-900 mb-10 dark:text-white flex flex-col md:flex-row">
      <Outlet />
      <div>
        <GetUserInfo user={user} />
      </div>
      <div className="max-w-2xl min-w-s mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 relative">
      <div className="absolute top-0 right-0 p-2  dark:text-white ">
          <button onClick={GoBack}>
            Exit <XCircleIcon className=' display:block h-9 w-9' />
            </button>
        </div>
        <GetPet pet={user.pet} />
      </div>
    </div>
  )
};

export default UserData;

