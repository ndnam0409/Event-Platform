
import { ChangeEvent, useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRoleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="hidden md:flex w-1/2 bg-cover">
        <img src="./band.svg" />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white bg-opacity-10 py-10 rounded-lg mr-24">
        <div className="flex flex-col items-center my-8">
          <h2 className="text-3xl font-bold text-white">Sign Up</h2>
        </div>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
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
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <select
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              id="role"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="manager">Organizer</option>
            </select>
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
          <div className="relative mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer pb-10"
              onClick={toggleConfirmPasswordVisibility}
            >
              <span className="text-white ml-2">
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <div className="my-5">
            <button
              className="w-full bg-[#F5167E] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
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
      </div>
    </div>
  );
};

export default SignUp;
