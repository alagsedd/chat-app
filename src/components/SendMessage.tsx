import { Button } from "@mui/material";
import styles from "../styles/SendMessage.module.css";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { auth, databaseCollectionRef } from "../services/FireBase";
import { useState } from "react";
import { LuSend } from "react-icons/lu";

const SendMessage = () => {
  const [newMessage, setNewMessage] = useState("");

  // const uniqueId = uuidv4();

  const handleChatSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newMessage) {
      addDoc(databaseCollectionRef, {
        id: auth.currentUser?.uid,
        text: newMessage,
        createdAt: serverTimestamp(),
        username: auth.currentUser?.displayName,
      })
        .then((res) => {
          console.log(res, "id submitted");
          setNewMessage("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleChatSubmission} className={styles.form}>
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        type="text"
        className={styles.input}
        placeholder="Message"
      />
      <Button type="submit" variant="contained">
        <LuSend color="white" size="30" />
      </Button>
    </form>
  );
};

export default SendMessage;
