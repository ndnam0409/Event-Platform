import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Navbar from './components/Navbar';
import UpcomingEvent from './components/UpcomingEvent';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="home" element={<><Navbar/><Header/><UpcomingEvent/></>}>
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<SignUp/>}/>
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
