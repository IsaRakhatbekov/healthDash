import styles from "./Chat.module.scss";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatWindow from "./ChatWindow/ChatWindow";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
