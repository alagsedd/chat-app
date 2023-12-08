import styles from "../styles/ChatCard.module.css";

interface Props {
  text: string;
  image: string | null | undefined;
  username: string | undefined | null;
  messageId: string;
}
const ChatCard = ({ text, username, image }: Props) => {
  const nickName =
    username && username.length > 2 ? username.slice(0, 2) : username;

  // console.log(auth.currentUser, "current user details");

  return (
    <>
      <div className={styles.card}>
        <img
          src={image || undefined}
          alt="Your browser doesn't support this image"
          className={styles.profilePic}
        />

        <div className="second">
          <span className={styles.nick}>{nickName}</span>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default ChatCard;
