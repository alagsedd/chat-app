import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
// import Chat from "../components/Chat";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  //   { path: "/chat-page", element: <Chat /> },
]);
export default router;
