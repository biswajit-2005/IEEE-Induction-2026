import { useState } from "react";
import Middle from "./middle.jsx";
import Registration from "./registration.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./dashboard.jsx";

function App() {
  const [themes, setThemes] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Middle themes={themes} setThemes={setThemes} />,
    },
    {
      path: "/registration",
      element: <Registration themes={themes} setThemes={setThemes} />,
    },
    {
      path: "/dashboard",
      element: <Dashboard themes={themes} setThemes={setThemes} />,
    },
  ]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        themes ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
