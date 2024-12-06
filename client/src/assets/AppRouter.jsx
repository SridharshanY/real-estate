import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import SignIn from "../pages/sIGNiN.JSX"
import SignUp from "../pages/SignUp"
import Profile from "../pages/Profile"



const AppRouter = () => {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/signIn',
          element: <SignIn />
        },
        {
          path: '/signUp',
          element: <SignUp />
        },
        {
          path: '/profile',
          element: <Profile />
        },
    
      ])

      return (
        <RouterProvider router={router} />
      );
    
}

export default AppRouter