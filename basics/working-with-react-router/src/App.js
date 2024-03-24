import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import EventsPage, { eventsPageAction } from "./pages/EventsPage";

import RegistrationPage, {
  registrationPageLoaderFunction,
  registrationPageActionFunction,
} from "./pages/RegistrationPage";

// import MyDetailsPage, {
//   myDetailsActionFunction,
//   myDetailsLoaderFunction,
// } from "./pages/MyDetailsPage";

import LoginPage, {
  loginPageLoaderFunction,
  loginPageActionFunction,
} from "./pages/LoginPage";

// import LoginOrSignupPage, {
//   getLoginOrRegistrationLoaderFunction,
//   getLoginOrRegistrationActionFunction,
// } from "./pages/LoginOrSignupPage";

const LoginOrSignupPage = lazy(() => import("./pages/LoginOrSignupPage"));
console.log(`LoginOrSignupPage: ${LoginOrSignupPage}`);

const MyDetailsPage = lazy(() => import("./pages/MyDetailsPage"));
console.log(`MyDetailsPage: ${MyDetailsPage}`);

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
        path: "/:authMode",
        element: <LoginOrSignupPage />,
        // LoginOrSignupPage === "login" ? <LoginPage /> : <RegistrationPage />,
        // STOPPED HERE -> Change
        loader: ({ request, params }) =>
          import("./pages/LoginOrSignupPage").then((module) =>
            module.getLoginOrRegistrationLoaderFunction({ request, params })
          ), // getLoginOrRegistrationLoaderFunction,
        action: ({ request, params }) =>
          import("./pages/LoginOrSignupPage").then((module) =>
            module.getLoginOrRegistrationActionFunction({ request, params })
          ), // getLoginOrRegistrationActionFunction,
      },
      {
        path: "my-details",
        element: <MyDetailsPage />,
        loader: ({ request, params }) =>
          import("./pages/MyDetailsPage").then((module) =>
            module.myDetailsLoaderFunction({ request, params })
          ), // myDetailsLoaderFunction
        action: ({ request, params }) =>
          import("./pages/MyDetailsPage").then((module) =>
            module.myDetailsActionFunction({ request, params })
          ), // myDetailsActionFunction,
      },
      // {
      //   path: "my-details/:id",
      //   element: <MyDetailsPage />,
      //   loader: myDetailsLoaderFunction,
      //   action: myDetailsActionFunction,
      // },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
