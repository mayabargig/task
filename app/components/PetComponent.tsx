import LogoDog from "~/images/logoDog.png"

const GetPet: React.FC = ({pet}) => {
    console.log(pet);
    

  return (
    <div>
   <div className=" overflow-hidden shadow rounded-lg border-solid border-white border-2 dark:text-white dark:bg-black">
    <div className="px-4 py-5 sm:px-6  dark:text-white dark:bg-black">
    <div className="flex items-center  dark:text-white dark:bg-black">
    <img
    className="h-9 w-9 flex-none rounded-full bg-gray-50"
    src={LogoDog}
    alt="petImage"
  />
  <h3 className="text-lg leading-6 font-medium text-gray-900 ml-2  dark:text-white dark:bg-black">
    Pet Profile
  </h3>
</div>
        <p className="mt-1 max-w-2xl text-sm text-gray-500  dark:text-white dark:bg-black">
            This is some information about the client pet.
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0  dark:text-white dark:bg-black">
        <dl className="sm:divide-y sm:divide-gray-200  dark:text-white dark:bg-black">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  dark:text-white dark:bg-black">
                    {pet.name}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Species
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  dark:text-white dark:bg-black">
                    {pet.species}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  dark:text-white dark:bg-black">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Breed
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2  dark:text-white dark:bg-black">
                    {pet.breed}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6  dark:text-white dark:bg-black">
                <dt className="text-sm font-medium text-gray-500  dark:text-white dark:bg-black">
                    Age
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white dark:bg-black ">
                    {pet.age} years old
                </dd>
            </div>
        </dl>
    </div>
</div>
    </div>
  )
}

export default GetPet;
