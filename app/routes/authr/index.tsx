import type { MetaFunction } from "@remix-run/node";
import { Outlet, useNavigate } from "@remix-run/react";
import { useState } from "react";
import LoginForm from "./login";
import RegisterForm from "./register";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Auth() {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const navigate = useNavigate();

  const toggleMode = (): void => {
    setIsLoginMode(!isLoginMode);
  };

  const handleNewUser = async (formData) => {
    console.log(formData);
    navigate('/');

    // if (
    //   formData.email &&
    //   formData.firstName &&
    //   formData.lastName &&
    //   formData.phoneNumber &&
    //   formData.userName &&
    //   formData.password &&
    //   formData.gender &&
    //   formData.address?.city &&
    //   formData.address.street &&
    //   formData.pet?.name &&
    //   formData.pet.species &&
    //   formData.pet.breed &&
    //   formData.pet.age &&
    //   formData.pet.gender
    // ) {
    //   try {
    //     const response = await fetch('http://localhost:5173/auth/req', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(formData)
    //     });

    //     if (response.ok) {
    //       console.log("User added successfully!");
    //       navigate('/');
    //     } else {
    //       const result = await response.json();
    //       console.error("Failed to add user:", result.error);
    //     }
    //   } catch (error) {
    //     console.error("Error adding user:", error);
    //   }
    // } else {
    //   console.error("Form data is incomplete");
    // }
  };

  return (
    <div className="dark:text-white dark:bg-black">
      {isLoginMode ? (
        <LoginForm toggleMode={toggleMode} />
      ) : (
        <RegisterForm toggleMode={toggleMode} handleNewUser={handleNewUser} />
      )}
      <Outlet />
    </div>
  );
}
