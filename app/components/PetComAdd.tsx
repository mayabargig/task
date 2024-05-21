import LogoDog from "~/images/logoDog.png"

const PetInfoAdd: React.FC = ({handleInputChange}) => {

  return (
    <div>
    <div className=" overflow-hidden shadow rounded-lg border-solid border-white border-2 dark:text-white dark:bg-black">
    <div className="px-4 py-5 sm:px-6  dark:text-white dark:bg-black">
    <div className="flex items-center  dark:text-white dark:bg-black">
  <img
    className="h-10 w-10 flex-none rounded-full bg-gray-50"
    src={LogoDog}
    alt="petImage"
  />
  <h3 className="text-lg leading-6 font-medium text-gray-900 ml-2  dark:text-white dark:bg-black">
    Pet Profile
  </h3>
</div>
        <p className="mt-1 max-w-2xl text-sm text-gray-500  dark:text-white dark:bg-black">
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  dark:text-white dark:bg-black">
                <input
                    className="text-sm w-20 p-1 h-6 rounded-md font-semibold  dark:text-white dark:bg-black"
                    placeholder="Name"
                    onChange={(e) => handleInputChange("pet.name", e.target.value)}
                    />
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Species
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  dark:text-white dark:bg-black">
                <input
                    className="text-sm w-20 p-1 h-6 rounded-md font-semibold  dark:text-white dark:bg-black"
                    placeholder="Species"
                    onChange={(e) => handleInputChange("pet.species", e.target.value)}
                    />
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  dark:text-white dark:bg-black">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Breed
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  dark:text-white dark:bg-black">
                <input
                    className="text-sm w-20 p-1 h-6 rounded-md font-semibold  dark:text-white dark:bg-black"
                    placeholder="Breed"
                    onChange={(e) => handleInputChange("pet.breed", e.target.value)}
                    />
                </dd>
            </div>

            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  dark:text-white dark:bg-black">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                Gender
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white dark:bg-black ">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className=" text-gray-500 font-semibold text-sm w-40 dark:text-white dark:bg-black block rounded-md border-0 py-0.5 px-1 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => handleInputChange("pet.gender", e.target.value)}
                >
                   <option>Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                </dd>
            </div>

            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  dark:text-white dark:bg-black">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Age
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white dark:bg-black ">
                <input
                    className="text-sm w-20 p-1 h-6 rounded-md font-semibold  dark:text-white dark:bg-black"
                    placeholder="Age"
                    onChange={(e) => handleInputChange("pet.age", e.target.value)}
                    />
                </dd>
            </div>

        </dl>
    </div>
</div>
    </div>
  )
}

export default PetInfoAdd;
