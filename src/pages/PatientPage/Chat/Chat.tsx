import styles from "./Chat.module.scss";
import ChatSidebar from "./ChatSidebar/ChatSidebar";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <ChatSidebar />
    </div>
  );
};

export default Chat;
