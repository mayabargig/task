import React, { useState } from 'react';
import UserInfoAdd from '~/components/UserComAdd';
import PetInfoAdd from '~/components/PetComAdd';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from '@remix-run/react';


type AddUserModalProps = {
  closeModal: () => void;
};

type UserWithDetails = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender:String;
  userName:String;
  password:String;
  address?: Array<{
    city: string;
    state: string;
    street: string;
  }>;
  pet?: Array<{
    name: string;
    age: string;
    breed: string;
    gender: string;
    species: string;
  }>;
};

const AddUserModal: React.FC<AddUserModalProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState<Partial<UserWithDetails>>({});
  const navigate = useNavigate();
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

  const handleAddUser = async () => {

    if (
      formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.phoneNumber &&
      formData.gender &&
      formData?.address?.city &&
      formData.address.street &&
      formData.pet?.name &&
      formData.pet.species &&
      formData.pet.breed &&
      formData.pet.age &&
      formData.pet.gender
    ) {
      try {
        const response = await fetch('http://localhost:5173/users/add/req', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          console.log("add successfully!");
          navigate('/users');
        } else {
          const result = await response.json();
          console.error("Failed to add user:", result.error);
        }
      } catch (error) {
        console.error("Error adding user:", error);
      }
    } else {
      console.error("Form data is incomplete");
    }
  };

  return (
    <div className="text-gray-900 mb-10 dark:text-white flex flex-col md:flex-row">
      <div className="absolute top-0 right-0 p-4  dark:text-white ">
        <button onClick={closeModal}>
           <XCircleIcon className=' display:block h-9 w-9'/>
        </button>
      </div>
    <div className=' dark:text-white '>
      <UserInfoAdd handleInputChange={handleInputChange}/>
    </div>
    <div className="max-w-2xl min-w-s mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 relative">
      <PetInfoAdd handleInputChange={handleInputChange}/>
    <div className="absolute bottom-3 right-0 p-3" onClick={closeModal}>
    <button 
    className="mb-0 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-1.5 py-1.5 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
    type="button"
    onClick={handleAddUser}>
      Add</button>
    </div>
  </div>
    </div>
  );
};

export default AddUserModal;
