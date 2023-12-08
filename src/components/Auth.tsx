import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import styles from "../styles/Auth.module.css";
import { auth, gitHubProvider, googleProvider } from "../services/FireBase";

import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

interface FormData {
  email: string;
  username: string;
  password: string;
}

const Auth = () => {
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user, "succesful");
        navigate("rules");
      })
      .catch((err) => console.log(err));
  };

  const signInWithGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((res) => console.log(res, "successful"))
      .catch((err) => console.log(err, "failure"));
  };

  const createNewAccount = () => {
    createUserWithEmailAndPassword(
      auth,
      getValues("email"),
      getValues("password")
    )
      .then((creds) => {
        navigate("rules");
        console.log(creds.user, "submitted");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setLoginError("auth/email-already-in-use");
        } else console.log(err.code);
      });
  };

  return (
    <>
      <div className={styles.parent}>
        <h1 className={styles.siteName}>
          <span>Alags Chats</span>
        </h1>
        <p className={styles.lure}>Connect in a simpler way.</p>

        <form className={styles.form} onSubmit={handleSubmit(createNewAccount)}>
          <input
            {...register("email", { required: true })}
            className={styles.input}
            type="text"
            placeholder="Email"
          />
          {loginError === "auth/email-already-in-use" && (
            <p className="text-danger">Account already in use</p>
          )}
          {loginError === "auth/invalid-email" && (
            <p className="text-danger">Invalid Email</p>
          )}
          {loginError === "auth/invalid-password" && (
            <p className="text-danger">Incorrect password</p>
          )}
          {errors.email?.type === "required" && (
            <p className="text-danger">This field is required</p>
          )}

          <input
            {...register("username", { required: true, maxLength: 6 })}
            className={styles.input}
            type="text"
            placeholder="Username"
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">This field is required</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p className="text-danger">
              The username cannot be more than 6 characters
            </p>
          )}

          <input
            {...register("password", { required: true, minLength: 7 })}
            className={styles.input}
            type="text"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-danger">
              The username cannot be less than 5 characters
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="text-danger">This field is required</p>
          )}

          <Button type="submit" variant="contained">
            {" "}
            Sign up
          </Button>
        </form>

        <span className={styles.or}>OR</span>

        <div className={styles.alt}>
          {/* <p> Don't have an account? </p> */}

          <Button
            startIcon={<SiGmail />}
            onClick={signInWithGoogle}
            variant="outlined"
          >
            Sign in With Google
          </Button>

          <Button
            startIcon={<FaGithub />}
            color="secondary"
            onClick={signInWithGitHub}
            variant="outlined"
          >
            Sign in With GitHub
          </Button>
        </div>
      </div>
    </>
  );
};

export default Auth;
