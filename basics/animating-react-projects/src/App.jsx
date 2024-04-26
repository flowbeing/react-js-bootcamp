import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";
// import TabsPage from "./pages/TabsPage.jsx";

const router = createBrowserRouter([
  { path: '/', 
    element: <WelcomePage />,
    // id: "rootId",
    // errorElement: <ErrorPage/>
    // loader: noLoaderFunction
    // action: noActionFunction
  },
  { path: '/challenges', element: <ChallengesPage /> },
]);

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>;
}

export default App;
