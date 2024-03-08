import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import EventsPage from "./pages/EventsPage";

const router = createBrowserRouter([
  {
    route: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { route: "events", element: <EventsPage /> },
      // { route: ""}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
