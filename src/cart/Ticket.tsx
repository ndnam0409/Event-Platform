const events = [
    {
      name: "Tech Conference 2024",
      ticketName: "A6",
      start: "2024-07-01 09:00",
      end: "2024-07-01 17:00"
    },
    {
      name: "Art Expo",
      ticketName: "B12",
      start: "2024-08-15 10:00",
      end: "2024-08-15 18:00"
    },
    {
      name: "Music Festival",
      ticketName: "F8",
      start: "2024-09-20 12:00",
      end: "2024-09-22 23:00"
    }
  ];
  
export default  function Ticket() {
    return (
        <div className='w-full min-h-96 mt-20'>
      <table className="min-w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">Event Name</th>
            <th scope="col" className="px-6 py-3 text-center">Ticket Name</th>
            <th scope="col" className="px-6 py-3 text-center">Start</th>
            <th scope="col" className="px-6 py-3 text-center">End</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? "bg-white dark:bg-gray-800" : ""}`}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                {event.name}
              </th>
              <td className="px-6 py-4 text-center">
                {event.ticketName}
              </td>
              <td className="px-6 py-4 text-center">
                {event.start}
              </td>
              <td className="px-6 py-4 text-center">
                {event.end}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  