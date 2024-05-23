import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Navbar from './components/Navbar';
import UpcomingEvent from './components/UpcomingEvent';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelpCenter from "./components/HelpCenter";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<><Navbar/><Header/><UpcomingEvent/></>}>
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<SignUp/>}/>
    <Route path="help-center" element={<HelpCenter/>}/>
    <Route path="*" element={<PageNotFound />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
