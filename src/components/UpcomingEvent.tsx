const events = [
  {
    date: "APR 14",
    title: "Wonder Girls 2010 Wonder Girls World Tour San Francisco",
    description:
      "We'll get you directly seated and inside for you to enjoy the show.",
    image: "/events/Event1.png",
  },
  {
    date: "AUG 20",
    title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
    description: "Directly seated and inside for you to enjoy the show.",
    image: "/events/Event2.png",
  },
  {
    date: "SEP 18",
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    description: "Directly seated and inside for you to enjoy the show.",
    image: "/events/Event3.png",
  },
  {
    date: "SEP 18",
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    description: "Directly seated and inside for you to enjoy the show.",
    image: "/events/Event4.png",
  },
  {
    date: "SEP 18",
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    description: "Directly seated and inside for you to enjoy the show.",
    image: "/events/Event5.png",
  },
  {
    date: "SEP 18",
    title: "2011 Super Junior SM Town Live '10 World Tour New York City",
    description: "Directly seated and inside for you to enjoy the show.",
    image: "/events/Event6.png",
  },
];

const UpcomingEvent = () => {
  return (
    <div className="container mx-auto py-10 px-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-[#242565]">Upcoming Events</h2>
        <div className="flex space-x-10">
          <button className="bg-gray-200 text-gray-800 font-bold py-3 px-5 rounded-full inline-flex items-center">
            <div className="pr-5">Event Type</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="bg-gray-200 text-gray-800 font-bold py-3 px-5 rounded-full inline-flex items-center">
            <div className="pr-5">Weekdays</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500">{event.date}</p>
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#F5167E] hover:bg-pink-700 text-white font-bold my-4 py-4 px-6 rounded-full">
          Load More
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvent;
