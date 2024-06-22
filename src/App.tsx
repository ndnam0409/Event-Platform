import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpCenter from "./components/HelpCenter";
import Login from "./ui/Login";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import SignUp from "./ui/Signup";
import UpcomingEvent from "./components/UpcomingEvent";
import CreateEvent from "./components/CreateEvent";
import OrganizationRegistration from "./components/OrganizationRegistration";
import { AuthProvider } from "./contexts/Authentication";
import UserProfile from "./features/user/UserProfile";
import CreateTicket from "./components/CreateTicket";
import AppLayout from "./ui/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EventProvider } from "./contexts/Event";
import Event from "./cart/Event";
import Ticket from "./cart/Ticket";
import Dashboard from "./components/Dashboard";
import Customer from "./features/admin/Customer";
import AdminLayout from "./features/admin/AdminLayout";
import LoginTest from "./components/LoginTest";
import { useState } from "react";
const routerUser = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element:<> 
        <Header />
        <UpcomingEvent/>
        <Brand />
        <Blog/></>,
      },
      { path: "/create-event", element: <CreateEvent /> },
      { path: "/create-ticket", element: <CreateTicket /> },
      { path: "/user-profile", element: <UserProfile/> },
      { path: "/help-center", element: <HelpCenter/> },
      {path:"/events",element:<Event/>},
      {path:"/tickets",element:<Ticket/>},
    ],
  },
  { path: "/login", element: <Login/> },
  { path: "/sign-up", element: <SignUp/> },
])
const routerAdmin = createBrowserRouter([
    
  {
  element:<AdminLayout/>,
  children:[
    {path:"/",element:<Dashboard/>},
    {path:"/customer",element:<Customer/>}
  ]


}
]);
function App() {
  const [role,setRole]=useState("user");
  return (
    <AuthProvider>
      <EventProvider>
    <RouterProvider router={role==="user"?routerUser:routerAdmin}/>
    </EventProvider>
    </AuthProvider>
  );
}

export default App;
