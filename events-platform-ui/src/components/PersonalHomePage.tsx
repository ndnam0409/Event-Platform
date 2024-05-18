const Navbar = () => {
    return (
      <div>
        <div className="bg-gradient-to-r py-8">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="flex items-center px-5">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              <a href="#" className="text-white text-lg font-bold ml-2">
                Eventtick
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#" className="text-white font-bold">
                Hot Events
              </a>
              <a href="#" className="text-white font-bold">
                Create Events
              </a>
              <a href="#" className="text-white font-bold">
                Help Center
              </a>
              <a
                href="#"
                className="text-white border border-white rounded-full hover:bg-white font-bold hover:text-black px-6 py-2 custom-hover-button transition"
              >
                Login
              </a>
              <a
                href="#"
                className="text-white rounded-full px-6 py-2 bg-pink-500 hover:bg-pink-700 transition font-bold"
              >
                Sign Up
              </a>
            </div>
            <button className="md:hidden text-white focus:outline-none">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  