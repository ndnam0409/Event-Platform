import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UpcomingEvent from "./components/UpcomingEvent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <UpcomingEvent />
      <Brand />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
