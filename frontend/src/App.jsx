import { useState } from "react";
import Middle from "./middle.jsx";
import Registration from "./registration.jsx";
import Dashboard from "./dashboard.jsx";
import BackgroundThree from "./backgroundThree.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const [themes, setThemes] = useState(false);

  const router = createBrowserRouter([
    { path: "/", element: <Middle themes={themes} setThemes={setThemes} /> },
    { path: "/registration", element: <Registration themes={themes} setThemes={setThemes} /> },
    { path: "/dashboard", element: <Dashboard themes={themes} setThemes={setThemes} /> },
  ]);

  return (<>
<div className={`min-h-screen ${themes ? "bg-black/50 text-white" : "bg-white/50 text-black"} bg-fixed`}>
  <BackgroundThree theme={themes} />
  <div className=" min-h-screen">  {/* Added min-h-screen */}
    <RouterProvider router={router} />
  </div>
</div>


</>
  );
}

export default App;
