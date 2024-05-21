// import { BeakerIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/solid'
// import { PrismaClient, User } from '@prisma/client';
// import { LoaderFunction } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';

// export const loader: LoaderFunction = async () => {

//     // const user = await prisma.user.findFirst({  
//     //     include: {  
//     //      address: true,
//     //      pet: true,  
//     //     },  
//     //    })

//     const prisma = new PrismaClient()
//     const users = await prisma.user.findMany({
//       include: {
//           address: true,
//           pet:true,
//       },
//     })
  
//     console.dir(users, { depth: Infinity })
//     console.log(users);
//     return { users };
//   };

//   type UserWithDetails = {
//     id: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     phoneNumber: string;
//     address?: {
//       city: string;
//       country: string;
//       street:String;
//         };
//     pet?: {
//       name: string;
//       age: number;
//       breed: string;
//       gender:String;
//       species:String;
//     };
//   };
  
//   type LoaderData = {
//     users: UserWithDetails[];
//   };
  
  
//   const GetUsers: React.FC = () => {
//     const { users } = useLoaderData<{ users: LoaderData[] }>();
//     // // const { users } = useLoaderData<LoaderData>();
//     console.log(users);

//     return (
//             users?(
//         <ul role="list" className="divide-y divide-gray-100">
//         {users.map((user) => (
//           <li key={user.email} className="flex justify-between gap-x-6 py-5">
//             <div className="flex min-w-0 gap-x-4">
//               <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="" />
//               <div className="min-w-0 flex-auto">
//                 <p className="text-sm font-semibold leading-6 text-gray-900">{user.firstName} {user.lastName} | {user.address[user.address.length - 1].city}</p>
//                 <div className="flex items-center space-x-1.5">
//                     <PhoneArrowDownLeftIcon className="h-3 w-3 text-gray-500" />
//                     <span className="mt-1 truncate text-xs leading-5 text-gray-500"> {user.phoneNumber}</span>
//                 </div>
//                 <div className="flex items-center space-x-1.5">
//                 <img className="h-6 w-6 flex-none rounded-full bg-gray-50" src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt="" />
//                 <span className="mt-1 truncate text-xs leading-5 text-gray-500">
//                     {user.pet[0].name} | Age:{user.pet[0].age} | {user.pet[0].breed} {user.pet[0].species}</span>
//                     </div>
//               </div>
//             </div>
//             <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
//               <p className="text-sm leading-6 text-gray-900">{user.email}</p>
//               {/* {user.lastSeen ? (
//                 <p className="mt-1 text-xs leading-5 text-gray-500">
//                   Last seen <time dateTime={user.lastSeenDateTime}>{user.lastSeen}</time>
//                 </p>
//               ) : (
//                 <div className="mt-1 flex items-center gap-x-1.5">
//                   <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                     <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                   </div>
//                   <p className="text-xs leading-5 text-gray-500">Online</p>
//                 </div>
//               )} */}
//             </div>
//           </li>
//         ))}
//       </ul>
//             ):'no client added yet'
        
//     );
//   }
  
//   export default GetUsers;