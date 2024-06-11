
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpCenter from "./components/HelpCenter";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import SignUp from "./components/Signup";
import UpcomingEvent from "./components/UpcomingEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <UpcomingEvent />
              <Brand />
              <Blog />
              <Footer />
            </>
          }
        ></Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
