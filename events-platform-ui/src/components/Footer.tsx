import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#0A075F] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Eventick</h2>
            <p className="text-gray-300 mb-4">
              Eventick is a global self-service ticketing platform for live
              experiences that allows anyone to create, share, find and attend
              events that fuel their passions and enrich their lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Plan Events</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Create and Set Up
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Sell Tickets
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Online RSVP
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Online Events
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Eventick</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Press
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  How it Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay In The Loop</h3>
            <p className="text-gray-300 mb-4">
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </p>
            <form className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-5 flex-grow text-gray-900 focus:outline-none rounded-full"
              />
              <button
                type="submit"
                className="bg-[#F5167E] text-white px-5 py-3 rounded-full -ml-24 mx-1"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-4 text-center">
        <p className="text-gray-400">&copy; 2022 Avi Yansah</p>
      </div>
    </footer>
  );
};

export default Footer;
