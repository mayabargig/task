import { AtSymbolIcon, MapPinIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";

const UserInfoEdit: React.FC = ({user,handleInputChange  }) => {
    console.log(user);
    

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 dark:text-white dark:bg-black border-solid border-white border-2">
    <div className="rounded-t-lg h-32 overflow-hidden">
      <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
      <img className="object-cover object-center p-0 h-32 w-32 bg-white dark:text-white dark:bg-black " 
       src={(user.gender === "female") ?
       ("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp")
       :
       ("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp")}
      alt='User_Profile'/>
    </div>
    <div className="text-center mt-2">
      <h2 className="font-semibold dark:text-white dark:bg-black">
        <input
          className="text-sm w-20 p-1 rounded-md font-semibold  dark:text-white dark:bg-black"
          defaultValue={user.firstName}
          placeholder="First Name"
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <input
          className="text-sm w-20 p-1 rounded-md font-semibold  dark:text-white dark:bg-black"
          defaultValue={user.lastName}
          placeholder="Last Name"
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
      </h2>
      <p className="text-gray-500 font-semibold dark:text-white dark:bg-black">
        <input
          className="text-sm w-40 p-1 rounded-md font-semibold  dark:text-white dark:bg-black"
          defaultValue={user.email}
          type="email"
          disabled
          placeholder="Email"
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around dark:text-white dark:bg-black">
      <li className="flex flex-col items-center justify-around">
        <MapPinIcon className="h-5 w-5 text-black-500"/>
        <div className="font-semibold m-0 dark:text-white dark:bg-black mt-2">
          <input
            className="text-sm w-20 p-1rounded-md font-semibold  dark:text-white dark:bg-black"
            defaultValue={user?.address?.city}
            placeholder="City"
            onChange={(e) => handleInputChange("address.city", e.target.value)}
          />
        </div>
        <span className="text-gray-500 mt-0 text-sm dark:text-white dark:bg-black">
          <input
            className="text-sm w-20 p-1 rounded-md font-semibold  dark:text-white dark:bg-black"
            defaultValue={user?.address?.street}
            placeholder="Street"
            onChange={(e) => handleInputChange("address.street", e.target.value)}
          />
        </span>
      </li>
      <li className="flex flex-col items-center justify-between dark:text-white dark:bg-black">
        <PhoneArrowDownLeftIcon className="h-5 w-5 text-black-500" />
        <div className="font-semibold dark:text-white dark:bg-black">
          <input
            className="text-sm w-20 p-1 rounded-md font-semibold  dark:text-white dark:bg-black"
            defaultValue={user.phoneNumber}
            placeholder="Telephone"
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
        </div>
      </li>
      <li className="flex flex-col items-center justify-around dark:text-white dark:bg-black">
        <AtSymbolIcon className="h-5 w-5 text-black-500"/>
        <div className="font-semibold dark:text-white dark:bg-black">
        <input
          className="text-sm w-20 p-1 rounded-md font-semibold  dark:text-white dark:bg-black"
        defaultValue={user.userName}
        placeholder="userName"
        onChange={(e) => handleInputChange("userName", e.target.value)}
      />
        </div>
      </li>
    </ul>
  </div>
  )
}

export default UserInfoEdit;
