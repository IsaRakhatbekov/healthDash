import { useEffect, useState } from "react";
import { mockChat } from "../../../../shared/mocks/mocks";
import styles from "./ChatSidebar.module.scss";
import Loader from "../../../../components/Loader/Loader";

const ChatSidebar = () => {
  const [chatValue, setChatValue] = useState<string>("all");
  const [unreadedMsg, setUnreadedMsg] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let unreadedLength = mockChat.filter((e) => e.status === "unread").length;
    setUnreadedMsg(unreadedLength);
  }, []);

  const filteredChat = () => {
    if (chatValue === "unread") {
      return mockChat.filter((e) => e.status === "unread");
    } else if (chatValue === "archived") {
      return mockChat.filter((e) => e.status === "archived");
    } else {
      return mockChat;
    }
  };

  const handleTabChange = (value: string) => {
    setLoading(true);
    setChatValue(value);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className={styles.chatSidebar}>
      <div className={styles.head}>
        <h4>Message</h4>
        <div className={styles.btnWrapper}>{/* ... иконки */}</div>
      </div>

      <div className={styles.searchInput}>
        <input type="text" />
      </div>

      <div className={styles.tabsWrapper}>
        <button
          className={`${chatValue === "all" ? styles.tabsBtnActive : ""} ${
            styles.tabsBtn
          }`}
          onClick={() => handleTabChange("all")}
        >
          All
        </button>
        <button
          className={`${chatValue === "unread" ? styles.tabsBtnActive : ""} ${
            styles.tabsBtn
          }`}
          onClick={() => handleTabChange("unread")}
        >
          Unread {unreadedMsg}
        </button>
        <button
          className={`${chatValue === "archive" ? styles.tabsBtnActive : ""} ${
            styles.tabsBtn
          }`}
          onClick={() => handleTabChange("archived")}
        >
          Archive
        </button>
      </div>

      <div className={styles.msgWrapper}>
        {loading ? (
          <Loader />
        ) : (
          filteredChat().map((el) => (
            <button key={el.id} className={styles.msg}>
              <div className={styles.msgTop}>
                <div className={styles.msgImgWrapper}>
                  <img src="#" alt="#" />
                </div>
                <span className={styles.msgName}>{el.name}</span>
                <span className={styles.msgTime}>{el.time}</span>
              </div>
              <div className={styles.msgBottom}>
                <p className={styles.msgText}>{el.message}</p>
                {el.unreadCount > 0 ? (
                  <span className={styles.unreaded}>{el.unreadCount}</span>
                ) : null}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
