import Home from "./Pages/Components/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./Pages/Components/Contact/Contact";
import Blog from "./Pages/Components/Blog/Blog";
import Review from "./Pages/Components/Reviews/Reviews";
import Comparison from "./Pages/Components/Comparison/Comparison";
import Privacy from "./Pages/Components/Privacy/Privacy";
import Term from "./Pages/Components/Term/Term";
import About from "./Pages/Components/About/About";
import Admin from "./Pages/Components/Admin/Admin";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/review",
      element: <Review />,
    },
    {
      path: "/comparison",
      element: <Comparison />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/term",
      element: <Term />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/admin",
      element: <Admin/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
