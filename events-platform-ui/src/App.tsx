import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PersonalHomePage from "./components/PersonalHomePage";
import UpcomingEvent from "./components/UpcomingEvent";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <UpcomingEvent />
      <PersonalHomePage />
    </div>
  );
}

export default App;
