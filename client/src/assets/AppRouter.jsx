import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/sIGNiN.JSX";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Header from "../components/Header";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
        </>
      ),
    },
    {
      path: "/signIn",
      element: (
        <>
          <Header />
          <SignIn />
        </>
      ),
    },
    {
      path: "/signUp",
      element: (
        <>
          <Header />
          <SignUp />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Header />
          <Profile />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
