import { useState } from "react";
import styles from "./Chat.module.scss";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import type { ChatType } from "../../../shared/types/chat";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<ChatType | null>(null);

  return (
    <div className={styles.chat}>
      <div className={styles.chatWrapper}>
        <ChatSidebar onSelectChat={setSelectedChat} />
      </div>
      <div className={styles.chatWindow}>
        <ChatWindow chat={selectedChat} />
      </div>
    </div>
  );
};

export default Chat;
