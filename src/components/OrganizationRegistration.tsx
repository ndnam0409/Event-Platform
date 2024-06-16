import React from 'react'

const OrganizationRegistration = () => {
  return (

    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
    <div className="hidden md:flex w-1/2 bg-cover">
      <img src="./band.svg" />
    </div>
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white bg-opacity-10 py-10 rounded-lg mr-24">
      <div className="flex flex-col items-center my-8">
        <h2 className="text-3xl font-bold text-white">Organization Registration</h2>
      </div>
        <form action="" className='flex flex-col w-3/4 items-center'>
            <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="org-name"
            >
              Organization Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              id="org-name"
              placeholder=""
            />
            </div>
            <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="event-desctiption"
            >
              Address
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              id="org-address"
              placeholder=""
            />
            </div>
            <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="org-capacity"
            >
              Contract Information
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              id="org-capacity"
              placeholder=""
            />
            
            </div>
            <button
              className=" w-1/3 min-w-32 bg-[#F5167E] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create
            </button>
        </form>
        </div>
        <div>
        </div>
        
    </div>
  )
}

export default OrganizationRegistration