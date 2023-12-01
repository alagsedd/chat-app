import { useState } from "react";
import styles from "../styles/LandingPage.module.css";
import Room from "../components/Room";
import Auth from "../components/Auth";
import Chat from "../components/Chat";

const LandingPage = () => {
  const [isAuth, setIsAuth] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div className={styles.parent}>
        {isAuth ? <div>{room ? <Chat /> : <Room />}</div> : <Auth />}
      </div>
    </>
  );
};

export default LandingPage;
