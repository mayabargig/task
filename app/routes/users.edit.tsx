import { XCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import PetInfoEdit from "~/components/PetComEdit";
import UserInfoEdit from "~/components/UserComEdit";

const HomeEdit: React.FC<{ user?: UserType; closeModal: () => void }> = ({ user, closeModal }) => {
  const [formData, setFormData] = useState<Partial<UserType>>({});
  const navigate = useNavigate();
  const petId = user?.pet?.id;
  const addressId = user?.address?.id;
  const userId = user?.id;

  const handleInputChange = (name: string, value: string) => {
    const spreadName = name.split('.');
    if (spreadName.length > 1) {
      setFormData(prev => ({
        ...prev,
        [spreadName[0]]: {
          ...(prev?.[spreadName[0]] as Record<string, string> || {}),
          [spreadName[1]]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

  };

  const updateUser = async () => {
    const updatedFormData = {
      ...formData,
      id: userId,
      pet: { ... (formData?.pet || {}), id: petId },
      address: { ... (formData?.address || {}), id: addressId }
    };
    try {

      const blob = new Blob([JSON.stringify(updatedFormData)], { type: 'application/json' });
      const response = await fetch('http://localhost:5173/users/edit/req', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: blob
      });

      if (response.ok) {
        console.log("add successfully!");
        navigate('/users');
        closeModal();
      } else {
        const result = await response.json();
        console.error("Failed to add user:", result.error);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  if (!user) return null;

  return (
    <div className="text-gray-900 mb-10 dark:text-white flex flex-col md:flex-row">
        <div className="absolute top-0 right-0 p-4  dark:text-white ">
          <button onClick={closeModal}>
            <XCircleIcon className=' display:block h-9 w-9' /></button>
        </div>
      <div>
        <UserInfoEdit user={user} handleInputChange={handleInputChange} />
      </div>
      <div className="max-w-2xl min-w-s mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 relative">
        <PetInfoEdit pet={user.pet} handleInputChange={handleInputChange} />
      <div className="absolute bottom-0 right-0 p-2">
        <button className="mb-0 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-1.5 py-1.5 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={updateUser} type="button">
          Update</button>
      </div>
      </div>
    </div>
  );
};

export default HomeEdit;
