import styles from "../styles/LandingPage.module.css";
import Auth from "../components/Auth";
import Chat from "../components/Chat";
import { auth } from "../services/FireBase";
import { useAuthState } from "react-firebase-hooks/auth";

const LandingPage = () => {
  const [user] = useAuthState(auth);
  console.log(user, "user");

  return (
    <>
      <div className={styles.parent}> {user ? <Chat /> : <Auth />}</div>
    </>
  );
};

export default LandingPage;
