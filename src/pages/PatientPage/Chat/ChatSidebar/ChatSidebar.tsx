import { useState } from "react";
import { mockChat } from "../../../../shared/mocks/mocks";
import styles from "./ChatSidebar.module.scss";

const ChatSidebar = () => {
  const [chatValue, setChatValue] = useState<string>("all");

  return (
    <div className={styles.chatSidebar}>
      <div className={styles.head}>
        <h4>Message</h4>
        <div className={styles.btnWrapper}>
          <button>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4381 1.00078C15.9259 1.00246 15.4352 1.20274 15.0736 1.55773L11.7573 4.80178V4.8033L4.66384 11.7409L1.93086 14.4159C1.89138 14.4551 1.86127 14.5024 1.84268 14.5544L1.83726 14.5635L1.29036 16.1685C1.26752 16.2351 1.2641 16.3067 1.2805 16.3751C1.29689 16.4435 1.33245 16.5061 1.38319 16.5559L1.65548 16.8238L1.10857 17.3588C1.03812 17.4301 0.999133 17.5257 1.00001 17.6249C1.0009 17.7241 1.04157 17.819 1.11328 17.8892C1.185 17.9593 1.28201 17.9991 1.38342 18C1.48483 18.0008 1.58253 17.9627 1.65548 17.8938L2.2047 17.358L2.47777 17.6274C2.52848 17.6771 2.59235 17.7119 2.66219 17.7279C2.73203 17.744 2.80506 17.7406 2.87305 17.7182L4.51454 17.1825C4.51841 17.181 4.51995 17.1779 4.52305 17.1764C4.57629 17.1584 4.62487 17.1292 4.66538 17.0909L7.3999 14.4159L14.4934 7.47679L17.518 4.5165L18.0649 5.0515L14.5097 8.52938C14.4392 8.60074 14.4002 8.69632 14.4011 8.79552C14.402 8.89473 14.4427 8.98962 14.5144 9.05978C14.5861 9.12993 14.6831 9.16972 14.7845 9.17058C14.8859 9.17144 14.9836 9.13331 15.0566 9.06439L18.8872 5.31862C18.9231 5.28344 18.9515 5.24167 18.9709 5.19572C18.9903 5.14976 19.0001 5.10051 19 5.05081C18.9999 5.0011 18.9897 4.95191 18.9701 4.90606C18.9504 4.86021 18.9218 4.8186 18.8857 4.78362L18.0409 3.95804C18.2575 3.64627 18.3736 3.27699 18.372 2.89107C18.3719 2.64099 18.3211 2.39341 18.2224 2.16271C18.1238 1.93201 17.9792 1.72277 17.7973 1.54713C17.619 1.37255 17.407 1.2343 17.1737 1.14039C16.9404 1.04648 16.6904 0.999528 16.4381 1.00078ZM16.4397 1.75372H16.4474C16.7499 1.75372 17.0353 1.87025 17.2565 2.08667C17.4755 2.29977 17.5989 2.58916 17.5998 2.89126C17.6006 3.19336 17.4789 3.48343 17.2612 3.69773L14.2366 6.65802L12.5959 5.0515L15.622 2.09273C15.8425 1.87706 16.1326 1.75599 16.4397 1.75372ZM12.0304 5.60391L13.6719 7.20891L7.12529 13.613L6.303 12.8109L5.48303 12.0088L12.0304 5.60391ZM4.9369 12.543L5.75919 13.3451L6.57916 14.148L4.39 16.288L3.57003 15.4859L2.75006 14.6838L4.9369 12.543ZM2.37179 15.3838L3.02467 16.0224L3.676 16.6596L2.85372 16.9252L2.09872 16.1866L2.37179 15.3838Z"
                fill="#323232"
                stroke="#323232"
                strokeWidth="0.4"
              />
            </svg>
          </button>
          <button>
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H17"
                stroke="#323232"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.5 7H14.5"
                stroke="#323232"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 13H12"
                stroke="#323232"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.searchInput}>
        <input type="text" />
      </div>
      <div className={styles.tabsWrapper}>
        <button
          className={`${chatValue === "all" ? styles.tabsBtnActive : ""}  ${
            styles.tabsBtn
          }`}
          onClick={() => {
            setChatValue("all");
          }}
        >
          All
        </button>
        <button
          className={`${chatValue === "unread" ? styles.tabsBtnActive : ""}  ${
            styles.tabsBtn
          }`}
          onClick={() => {
            setChatValue("unread");
          }}
        >
          Unread (25)
        </button>
        <button
          className={`${chatValue === "archive" ? styles.tabsBtnActive : ""}  ${
            styles.tabsBtn
          }`}
          onClick={() => {
            setChatValue("archive");
          }}
        >
          Archive
        </button>
      </div>
      <div className={styles.msgWrapper}>
        {mockChat?.map((el) => (
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
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
