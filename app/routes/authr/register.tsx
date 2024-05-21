import type { LinksFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import styles from "~/tailwind.css?url";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import LogoDog from '~/images/PetZone.png'
import { useState } from "react";

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

export const links: LinksFunction = () =>
 [{ rel: "stylesheet", href: styles }];

export default function RegisterForm({toggleMode, handleNewUser}) {
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
    console.log(formData);
  }; 

  // const handleNewUser = async (formData) => {

  //   if (
  //     formData.email &&
  //     formData.firstName &&
  //     formData.lastName &&
  //     formData.phoneNumber &&
  //     formData.userName &&
  //     formData.password &&
  //     formData.gender &&
  //     formData.address?.city &&
  //     formData.address.street &&
  //     formData.pet?.name &&
  //     formData.pet.species &&
  //     formData.pet.breed &&
  //     formData.pet.age &&
  //     formData.pet.gender
  //   ) {
  //     try {
  //       const response = await fetch('http://localhost:5173/auth/req', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(formData)
  //       });

  //       if (response.ok) {
  //         console.log("add successfully!");
  //         navigate('/home');
  //       } else {
  //         const result = await response.json();
  //         console.error("Failed to add user:", result.error);
  //       }
  //     } catch (error) {
  //       console.error("Error adding user:", error);
  //     }
  //   } else {
  //     console.error("Form data is incomplete");
  //   }
  // };

  return (
    <form method="post" className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  dark:text-white dark:bg-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm  dark:text-white dark:bg-black">
          <img
            className="mx-auto h-12 w-auto  dark:text-white rounded-full"
            src={LogoDog}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900  dark:text-white dark:bg-black">
            Register Pet-Zone
          </h2>
        </div>

    <div className="space-y-12  dark:text-white">
      <div className="border-b border-gray-900/10 pb-12  dark:text-white">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6  dark:text-white">
          <div className="sm:col-span-2">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900  dark:text-white">
              Username
            </label>
            <div className="mt-2  dark:text-white dark:bg-black">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md  dark:text-white dark:bg-black">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm  dark:text-white ">Pet.com/</span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className=" dark:text-white dark:bg-black block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="your_full_name"
                  onChange={(e) => handleInputChange("username", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* <div className="col-span-full  dark:text-white dark:bg-black">
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900  dark:text-white dark:bg-black">
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  dark:text-white dark:bg-black"
              >
                Change
              </button>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900  dark:text-white dark:bg-black">
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10  dark:text-white dark:bg-black">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600  dark:text-white dark:bg-black">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500  dark:text-white dark:bg-black"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600  dark:text-white dark:bg-black">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div> */}
        </div>
     </div>

      <div className="border-b border-gray-900/10 pb-12  dark:text-white dark:bg-black">
        <h2 className="text-base font-semibold leading-7 text-gray-900  dark:text-white dark:bg-black">Personal Information</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600  dark:text-white dark:bg-black">Use a permanent address where you can receive mail.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3  dark:text-white dark:bg-black">
            <label htmlFor="firstName" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastName" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="  dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => handleInputChange("email", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="telephone" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
            Phone Number
            </label>
            <div className="mt-2">
              <input
                id="telephone"
                name="phoneNumber"
                type="telephone"
                autoComplete="telephone"
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </div>

          <div className="sm:col-span-3 sm:col-start-1">
            <label htmlFor="city" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                onChange={(e) => handleInputChange("address.city", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
            Street
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="address.street"
                id="address"
                autoComplete="address-level1"
                onChange={(e) => handleInputChange("address.street", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 sm:col-start-1">
            <label htmlFor="street" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="street-address"
                onChange={(e) => handleInputChange("password", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
              <label htmlFor="gender" className=" dark:text-white block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                   <option>Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

        </div>
      </div>

            <div className="border-b border-gray-900/10 pb-12  dark:text-white dark:bg-black">
        <h2 className="text-base font-semibold leading-7 text-gray-900  dark:text-white dark:bg-black">Pet Information</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        
        <div className="sm:col-span-3 sm:col-start-1">
            <label htmlFor="street" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => handleInputChange("pet.name", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
              <label htmlFor="gender" className=" dark:text-white block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  onChange={(e) => handleInputChange("pet.gender", e.target.value)}
                  className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                   <option>Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
            <label htmlFor="city" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Species
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="species"
                id="species"
                autoComplete="species"
                onChange={(e) => handleInputChange("pet.species", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="country" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Breed
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="breed"
                id="breed"
                autoComplete="breed"
                onChange={(e) => handleInputChange("pet.breed", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 sm:col-start-1">
            <label htmlFor="city" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Age
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="age"
                id="age"
                autoComplete="age"
                onChange={(e) => handleInputChange("pet.age", e.target.value)}
                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div className="sm:col-span-3">
            <label htmlFor="country" className=" dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
              Country
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="country"
                id="country"
                autoComplete="address-level1"

                className=" dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}

          </div>
          </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button onClick={toggleMode} type="button" className="  dark:text-white text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
        onClick={()=>{handleNewUser(formData)}}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
  )
}
