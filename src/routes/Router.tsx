import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import StaticExample from "../components/Modal";
import Chat from "../components/Chat";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/rules", element: <StaticExample /> },
  { path: "/chats", element: <Chat /> },
]);
export default router;
