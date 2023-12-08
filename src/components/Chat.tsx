import styles from "../styles/Chat.module.css";
import { useEffect, useState } from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, databaseCollectionRef } from "../services/FireBase";
import LogOut from "./LogOut";
import SendMessage from "./SendMessage";
import ChatCard from "../cards/ChatCard";
import { useForm } from "react-hook-form";

interface Message {
  id: string;
  text: string;
  createdAt: string;
  username: string;
}

const Chat = () => {
  const [deliveredMessages, setDeliveredMessages] = useState<Message[]>();

  const { getValues } = useForm();
  console.log(getValues("username"));
  useEffect(() => {
    const q = query(databaseCollectionRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesFromFireBase: Message[] = [];
      querySnapshot.forEach((doc) => {
        messagesFromFireBase.push({ ...doc.data(), id: doc.id } as Message);
      });

      // console.log(deliveredMessages, "messages");
      setDeliveredMessages(messagesFromFireBase);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className={styles.top}>
        <img
          src={auth.currentUser?.photoURL || null || undefined}
          alt="Your browser doesn't support this image"
          className={styles.profilePic}
        />
        <span>{auth.currentUser?.displayName}</span> <LogOut />
      </div>

      <div className={styles.parent}>
        <p className={styles.note}>This is a group chat</p>{" "}
        <div className={styles.messages}>
          {deliveredMessages &&
            deliveredMessages.map((message) => (
              <ChatCard
                image={auth.currentUser?.photoURL || null || undefined}
                messageId={message.id}
                key={message.id}
                username={auth.currentUser?.displayName}
                text={message.text}
              />
            ))}
        </div>
        <SendMessage />
      </div>
    </>
  );
};

export default Chat;
