// import type { LinksFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
// import styles from "~/tailwind.css?url";
import LogoDog from '~/images/PetZone.png';

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type LoginFormProps = {
  toggleMode: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ toggleMode }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('./', { replace: true });
  };

  return (
    <div className="h-full bg-white dark:text-white dark:bg-black">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:text-white dark:bg-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-12 w-auto rounded-full"
            src={LogoDog}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Email address
              </label>
              <div className="mt-2 dark:text-white dark:bg-black">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="dark:text-white dark:bg-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="dark:text-white dark:bg-black block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={goToHome}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 dark:text-white dark:bg-black">
            Not a member?{' '}
            <span onClick={toggleMode} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
              Go register for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
