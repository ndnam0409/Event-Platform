import Brand from "./components/Brand";
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
    </div>
  );
}

export default App;
