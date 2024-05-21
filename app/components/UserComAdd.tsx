import { AtSymbolIcon, MapPinIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";

const UserInfoAdd: React.FC = ({ handleInputChange }) => {

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 dark:text-white dark:bg-black border-solid border-white border-2">
      <div className="rounded-t-lg h-32 overflow-hidden  dark:text-white ">
        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 bg-white border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-full bg-white  dark:text-white dark:bg-black p-0 m-0" 
        src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png' 
        alt='User_Profile' />
      </div>
      <div className="text-center mt-2 flex flex-col justify-center">
        <h2 className="font-semibold dark:text-white dark:bg-black">
          <input
            className="text-sm w-20 p-1 rounded-md  dark:text-white dark:bg-black"
            placeholder="First Name"
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
          <input
            className="text-sm w-20 p-1 rounded-md dark:text-white dark:bg-black"
            placeholder="Last Name"
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </h2>
        <p className="text-gray-500 font-semibold dark:text-white dark:bg-black">
          <input
            className="text-sm w-40 p-1 rounded-md  dark:text-white dark:bg-black"
            placeholder="Email"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </p>
        <div className="flex flex-auto justify-center">
          <select
            id="gender"
            name="gender"
            autoComplete="gender"
            required
            className=" text-gray-500 font-semibold text-sm w-40 dark:text-white dark:bg-black block rounded-md border-0 py-0.5 px-1 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={(e) => handleInputChange("gender", e.target.value)}
          >

            <option>Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around dark:text-white dark:bg-black">
        <li className="flex flex-col items-center justify-around">
          <MapPinIcon className="h-5 w-5 text-black-500" />
          <div className="font-semibold m-0 dark:text-white dark:bg-black mt-2">
            <input
              className="text-sm w-20 p-1 h-6 rounded-md  dark:text-white dark:bg-black"
              placeholder="City"
              onChange={(e) => handleInputChange("address.city", e.target.value)}
            />
          </div>
          <span className="text-gray-500 mt-0 text-sm dark:text-white dark:bg-black">
            <input
              className="text-sm w-20 p-1 h-6 rounded-md font-semibold  dark:text-white dark:bg-black"
              placeholder="Street"
              onChange={(e) => handleInputChange("address.street", e.target.value)}
            />
          </span>
        </li>
        <li className="flex flex-col items-center justify-between dark:text-white dark:bg-black">
          <PhoneArrowDownLeftIcon className="h-5 w-5 text-black-500" />
          <div className="font-semibold dark:text-white dark:bg-black">
            <input
              className="text-sm w-20 p-1 h-6 rounded-md  dark:text-white dark:bg-black"
              placeholder="Telephone"
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </div>
        </li>
        <li className="flex flex-col items-center justify-around dark:text-white dark:bg-black">
          <AtSymbolIcon className="h-5 w-5 text-black-500" />
          <div className="font-semibold dark:text-white dark:bg-black">
            <input
              className="text-sm w-20 p-1 h-6 rounded-md dark:text-white dark:bg-black"
              placeholder="userName"
              onChange={(e) => handleInputChange("userName", e.target.value)}
            />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default UserInfoAdd;
