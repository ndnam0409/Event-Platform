
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
import CreateEvent from "./components/CreateEvent";
import OrganizationRegistration from "./components/OrganizationRegistration";
import { AuthProvider } from "./components/contexts/FakeAuthentication";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <UpcomingEvent/>
              <Brand />
              <Blog/>
              <Footer />
            </>
          }
        >
          
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="help-center" element={
          <>
        <Navbar />
        <HelpCenter />
        <Footer />
        </>
      } 
        />
        <Route path="create-event" element={
          <>
          <Navbar />
        <CreateEvent />
        <Footer />
        </>
        } />
        <Route path="create-organization" element={
          <>
        <Navbar />
        <OrganizationRegistration />
        <Footer />
        </>
      } 
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
