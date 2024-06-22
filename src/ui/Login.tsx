import {  useEffect, useState } from "react";
import { useAuth } from "../contexts/Authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("tai@gmail.com");
  const { login, isAuthenticated } = useAuth();
  const [password, setPassword] = useState("password");
  const navigate=useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit =async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Check login trong If
    if (email && password) {
      const isLogin=await login(email, password);
      if(!isLogin){
        alert("Login failed")
      }
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated)
      navigate("/")
    }
  }, [isAuthenticated]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="hidden md:flex w-1/2 bg-cover">
        <img src="./band.svg" />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white bg-opacity-10 py-10 rounded-lg mr-24">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-3xl font-bold text-white">Log in</h2>
        </div>
        <form className="w-full max-w-sm"
        onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Your password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Your password"
              required
              onChange={e=>setPassword(e.target.value)}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer pb-10"
              onClick={togglePasswordVisibility}
            >
              <span className="text-white ml-2">
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <div className="my-5">
            <button
              className="w-full bg-[#F5167E] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Log in
            </button>
          </div>
          <p className="text-sm text-white text-center">
            By continuing, you agree to the{" "}
            <a href="#" className="underline">
              Terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Policy
            </a>
          </p>
        </form>
        <div className="mt-6 flex justify-between w-full max-w-sm my-8">
          <p className="text-sm text-white">
            <a href="#" className="underline">
              Forgot your password?
            </a>
          </p>
          <p className="text-sm text-white font-bold">Create account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
