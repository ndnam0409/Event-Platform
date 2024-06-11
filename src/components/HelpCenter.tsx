import React from "react";
import Brand from "./Brand";
import Footer from "./Footer";

const organizerSupport = {
  flexDirection: "flex-row",
  title: "How to host an event?",
  description: "Join our platform as an event organizer by registering today",
  picture: "events/Event1.png",
};
const customerSupport = {
  flexDirection: "flex-row-reverse",
  title: "How to purchase your desired event?",
  description: "Discover, search, and schedule your desired events",
  picture: "events/Event2.png",
};
const additionalSupport = {
  flexDirection: "flex-row",
  title: "Explore even more possibilities?",
  description: "Engage and connect with our vibrant",
  picture: "events/Event3.png",
};

interface SupportCard {
  objectSupport: {
    flexDirection: string;
    title: string;
    description: string;
    picture: string;
  };
}

const SupportCard: React.FC<SupportCard> = ({ objectSupport }) => {
  const { flexDirection, title, description, picture } = objectSupport;
  return (
    <div
      className={`max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 flex items-center justify-between relative ${flexDirection}`}
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <button className="bg-yellow-400 text-white py-2 px-4 rounded shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
          View More
        </button>
      </div>
      <div className="relative">
        <img
          className="object-cover"
          src="help-center/Vector.png"
          alt="Vector"
        />
        <img
          className="absolute object-cover"
          src={`${picture}`}
          alt="Event"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

const HelpCenter = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-36">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-8xl font-bold text-white">Help center</h1>
          <p className="mt-6 text-2xl text-white w-[700px]">
            Discover, connect, and engage with events seamlessly on our
            innovative event platform
          </p>
          <button className="bg-black font-bold text-white px-5 py-2 mt-3 rounded-md">
            See more
          </button>
        </div>
      </div>
      <div>
        <SupportCard objectSupport={organizerSupport} />
        <SupportCard objectSupport={customerSupport} />
        <SupportCard objectSupport={additionalSupport} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="ml-14 h-2 text-center">
          <h3 className="font-medium text-center text-3xl">Why it's works</h3>
          <div>
            <img src="help-center/yellow-underline.png" alt="Line" />
          </div>
        </div>
        <div className="flex justify-around max-w-4xl pt-20">
          <div>
            <div className="flex justify-center">
              <img src="help-center/icon1.png" alt="Icon" />
            </div>
            <h4 className="font-medium text-center">Persionalized hosting</h4>
            <p>
              Experience personalized hosting like never before on our event
              platform. We prioritize your needs and offer tailored event
              hosting solutions that cater to your unique requirements.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="help-center/icon2.png" alt="Icon" />
            </div>
            <h4 className="font-medium text-center">Trusted content</h4>
            <p>
              Discover peace of mind with our trusted content on the event
              platform. We curate a diverse range of reliable and verified event
              listings, ensuring that you have access to high-quality and
              reputable experiences.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="help-center/icon3.png" alt="Icon" />
            </div>
            <h4 className="font-medium text-center">
              Tools to easily connecting
            </h4>
            <p>
              Effortlessly connect with our suite of intuitive tools. Seamlessly
              bridge the gap and bring together event organizers and attendees
              with our user-friendly platform.{" "}
            </p>
          </div>
        </div>
      </div>
      <Brand />
      <Footer />
    </div>
  );
};

export default HelpCenter;
