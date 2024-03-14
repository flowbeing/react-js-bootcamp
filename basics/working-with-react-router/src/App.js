import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import EventsPage, { eventsPageAction } from "./pages/EventsPage";
import RegistrationPage, {
  registrationPageLoaderFunction,
  registrationPageActionFunction,
} from "./pages/RegistrationPage";
import MyDetailsPage, {
  myDetailsActionFunction,
  myDetailsLoaderFunction,
} from "./pages/MyDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    action: registrationPageActionFunction,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "events", element: <EventsPage />, action: eventsPageAction },
      {
        path: "register",
        element: <RegistrationPage />,
        // loader: registrationPageLoaderFunction
        action: registrationPageActionFunction,
      },
      {
        path: "my-details",
        element: <MyDetailsPage />,
        loader: myDetailsLoaderFunction,
        action: myDetailsActionFunction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
