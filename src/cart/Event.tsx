import React from 'react'

const events = [
    {
      name: "Mây lang thang",
      start: "2024-07-01 09:00",
      end: "2024-07-01 17:00",
      location: "Đà Lạt"
    },
    {
      name: "Yên Concert",
      start: "2024-08-15 10:00",
      end: "2024-08-15 18:00",
      location: "Hà Nội"
    },
    {
      name: "Music Festival",
      start: "2024-09-20 12:00",
      end: "2024-09-22 23:00",
      location: "KTX Khu B"
    }
  ];

const Event = () => {
    return (
        <div className='w-full min-h-96 mt-20'>
        <table className="min-w-full  bg-black ">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">Event Name</th>
              <th scope="col" className="px-6 py-3">Start</th>
              <th scope="col" className="px-6 py-3">End</th>
              <th scope="col" className="px-6 py-3">Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? "bg-white dark:bg-gray-800" : ""}`}>
                <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {event.name}
                </th>
                <td className="text-center px-6 py-4">
                  {event.start}
                </td>
                <td className="text-center px-6 py-4">
                  {event.end}
                </td>
                <td className="text-center px-6 py-4">
                  {event.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
}

export default Event