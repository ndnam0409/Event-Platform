const Header = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-8">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src="./band.svg" alt="Header" className="w-1/2" />
        <div className="flex flex-col text-white text-[16px] w-1/2 px-12">
          <h1 className="text-4xl font-bold mb-4">
            SBS MTV The Kpop Show Ticket Package
          </h1>
          <p className="mb-8 pr-20">
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording.
          </p>
          <div className="flex space-x-5">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-5 rounded-full">
              Get Ticket
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
