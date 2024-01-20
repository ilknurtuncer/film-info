import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import GoogleIcon from "../assets/GoogleIcon";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { signIn, signUpProvider } = useContext(AuthContext);

  const { email, password } = formData;

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    setFormData({ email: "", password: "" });
  };

  const handleProviderLogin = () => {
    signUpProvider();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-700 py-6 flex flex-col justify-center sm:py-12 w-[100%]">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white dark:bg-gray-900 shadow-lg sm:rounded-3xl sm:p-20">
          <form className="max-w-md mx-auto w-[25rem]" onSubmit={handleSubmit}>
            <div>
              <h1 className="text-2xl font-semibold text-center dark:text-white">
                Sign in
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div>
                  {/*Email input*/}
                  <div className="relative mb-3">
                    <input
                      name="email"
                      type="email"
                      className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="email"
                      placeholder="name@example.com"
                      required
                      onChange={handleFormData}
                      value={email || ""}
                    />
                    <label
                      htmlFor="email"
                      className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Email address
                    </label>
                  </div>
                  {/*Password input*/}
                  <div className="relative mb-3">
                    <input
                      name="password"
                      type="password"
                      className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="floatingPassword"
                      placeholder="Password"
                      required
                      onChange={handleFormData}
                      value={password || ""}
                    />
                    <label
                      htmlFor="floatingPassword"
                      className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-center flex-col">
                  <button
                    className="bg-blue-500 w-6/12 text-white rounded-md px-2 py-1"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="flex items-center text-base bg-blue-500 text-white w-6/12 rounded-md px-2 py-1"
                    type="button"
                    onClick={handleProviderLogin}
                  >
                    <GoogleIcon color="currentColor" /> Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;