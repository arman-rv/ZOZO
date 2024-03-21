import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./page/landing";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Landing /> }]);
  return (
    // holder
    <RouterProvider router={router} />
  );
}

export default App;
