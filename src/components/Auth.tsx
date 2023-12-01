import { signInWithPopup } from "firebase/auth";
import styles from "../styles/Auth.module.css";
import { auth, googleProvider } from "../services/FireBase";
import Cookies from "universal-cookie";
import { Button } from "@mui/material";
import logo from "../assets/Images/logo.jpg";

const Auth = () => {
  const cookies = new Cookies();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        cookies.set("auth-token", auth.currentUser?.refreshToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styles.parent}>
        <h1 className={styles.siteName}>
          <span>Alags Chats</span>
        </h1>
        <p className={styles.lure}>Connect in a simpler way.</p>

        <form className={styles.form} onSubmit={signInWithGoogle}>
          <input
            className={styles.input}
            type="text"
            placeholder="Username or email"
          />
          <input className={styles.input} type="text" placeholder="Password" />
          <Button onClick={signInWithGoogle} variant="contained">
            {" "}
            Log in
          </Button>
        </form>

        <span className={styles.or}>OR</span>

        <div className={styles.alt}>
          <p>Don't have an account? </p>
          <Button variant="outlined">Continue With Google</Button>
        </div>
      </div>
    </>
  );
};

export default Auth;
