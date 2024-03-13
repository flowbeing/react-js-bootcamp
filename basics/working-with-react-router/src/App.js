import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import EventsPage, { eventsPageAction } from "./pages/EventsPage";
import RegistrationPage, { registerAction } from "./pages/RegistrationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    action: registerAction,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "events", element: <EventsPage />, action: eventsPageAction },
      {
        path: "register",
        element: <RegistrationPage />,
        action: registerAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
