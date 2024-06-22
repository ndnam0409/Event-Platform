import { useState } from "react";

const CreateTicket = () => {
  const [seatNum,setSeatNum]=useState(1);
  const addSeat=()=>{
    setSeatNum(p=>p+1);
  }
  return (
    <div className="min-h-screen p-6 bg-gradient-to-r flex items-center justify-center ">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Create Ticket</h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Ticket Detail</p>
              </div>
              <form>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Area</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                    />
                  </div>
        
                  <div className="md:col-span-3">
                    <label htmlFor="seat">Seat</label>
                    <input
                      type="text"
                      name="seat-1"
                      id="seat-1"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="seat-number-1">Number</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <button
                        form="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <input
                        name="seat-1-number"
                        id="seat-1-number"
                        placeholder="0"
                        className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value="0"
                      />
                      <button
                        form="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2 fill-current"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="seat-1-price">Price/Seat</label>
                    <input
                      type="number"
                      name="seat-1-price"
                      id="seat-1-price"
                      className="flex items-center h-10 border rounded w-full bg-gray-50"
                      placeholder=""
                      value=""
                    />
                  </div>
                  {Array.from({length:seatNum-1},(_,i)=>{
                    return (
                      <>   
                  <div className="md:col-span-3">
                    <label htmlFor={`seat-${i+2}`}>Seat</label>
                    <input
                      type="text"
                      name={`seat-${i+2}`}
                      id={`seat-${i+2}`}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor={`seat-${i+2}-number`}>Number</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <button
                        form="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <input
                        name={`seat-${i+2}-number`}
                        id={`seat-${i+2}-number`}
                        placeholder="0"
                        className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value="0"
                      />
                      <button
                        form="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2 fill-current"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor={`seat-${i+2}-price`}>Price</label>
                    <input
                      type="number"
                      name={`seat-${i+2}-price`}
                      id={`seat-${i+2}-price`}
                      className="flex items-center h-10 border rounded w-full bg-gray-50"
                      placeholder=""
                      value=""
                    />
                  </div>
                  
                      </>
                    )
                  })}
                  <div className="md:col-span-5 flex flex-row-reverse">
                    <label className="m-2" htmlFor="addSeat">
                      Add Seat
                    </label>
                    <button id="addSeat"
                    onClick={addSeat}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
        <button
          className="h-12 w-1/4 min-w-32 bg-[#F5167E] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => navigate("../create-ticket")}
        >
          Next
        </button>
        
      </div>
      
    </div>
    
  );
};

export default CreateTicket;
