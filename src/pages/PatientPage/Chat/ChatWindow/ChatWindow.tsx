import { style } from "framer-motion/client";
import type { ChatType } from "../../../../shared/types/chat";
import styles from "./ChatWindow.module.scss";

interface ChatWindowProps {
  chat: ChatType | null;
}
const ChatWindow = ({ chat }: ChatWindowProps) => {
  console.log(chat?.messages);
  return (
    <div className={styles.chatWindow}>
      {chat === null ? (
        <>NONONONON</>
      ) : (
        <>
          <div className={styles.top}>
            <div className={styles.personInfoWrapper}>
              <div className={styles.avatarWrapper}>
                <img src="/default-avatar.png" alt="" />
              </div>
              <div>
                <span className={styles.personName}>{chat?.name}</span>
                <span className={styles.personStatus}>status</span>
              </div>
            </div>
            <div className={styles.topSettingWraper}>
              <button className={styles.topSearch}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.52218 17.9143C7.14094 17.9143 5.12521 17.0883 3.475 15.4363C1.825 13.7844 1 11.7913 1 9.45714C1 7.12295 1.82597 5.12987 3.47792 3.47793C5.12966 1.82598 7.12815 1 9.4734 1C11.8184 1 13.8114 1.82598 15.4523 3.47793C17.0934 5.12987 17.9139 7.12457 17.9139 9.46202C17.9139 10.4014 17.7661 11.3007 17.4704 12.1601C17.1747 13.0195 16.7311 13.8259 16.1397 14.5795L22.6683 21.0434C22.8894 21.2599 23 21.5283 23 21.8485C23 22.1689 22.8894 22.4397 22.6683 22.6608C22.4446 22.8869 22.1719 23 21.8501 23C21.5286 23 21.2622 22.8869 21.0508 22.6608L14.5548 16.1722C13.9096 16.7199 13.1552 17.1471 12.2915 17.4538C11.4278 17.7608 10.5047 17.9143 9.52218 17.9143ZM9.49226 15.6985C11.2207 15.6985 12.6872 15.0888 13.8917 13.8696C15.0962 12.6504 15.6985 11.1795 15.6985 9.45714C15.6985 7.73473 15.0958 6.26391 13.8904 5.04468C12.6853 3.82544 11.2192 3.21582 9.49226 3.21582C7.7473 3.21582 6.26489 3.82544 5.045 5.04468C3.82533 6.26391 3.2155 7.73473 3.2155 9.45714C3.2155 11.1795 3.82501 12.6504 5.04403 13.8696C6.26304 15.0888 7.74579 15.6985 9.49226 15.6985Z"
                    fill="#969696"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 7.71429L15.6364 12L22 16.2857V7.71429Z"
                    stroke="#646464"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.8182 6H3.81818C2.81403 6 2 6.76751 2 7.71429V16.2857C2 17.2325 2.81403 18 3.81818 18H13.8182C14.8223 18 15.6364 17.2325 15.6364 16.2857V7.71429C15.6364 6.76751 14.8223 6 13.8182 6Z"
                    stroke="#646464"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9995 15.9791V18.3877C20.0004 18.6113 19.9545 18.8327 19.8648 19.0375C19.775 19.2424 19.6434 19.4263 19.4783 19.5775C19.3132 19.7286 19.1183 19.8437 18.906 19.9154C18.6938 19.987 18.4689 20.0136 18.2457 19.9935C15.7702 19.725 13.3923 18.8808 11.3031 17.5286C9.35937 16.2959 7.71141 14.6512 6.47627 12.7113C5.11669 10.6168 4.27059 8.23206 4.00653 5.75036C3.98643 5.52834 4.01286 5.30457 4.08416 5.0933C4.15546 4.88203 4.27005 4.6879 4.42065 4.52325C4.57124 4.35861 4.75454 4.22706 4.95886 4.13699C5.16319 4.04691 5.38407 4.00029 5.60744 4.00008H8.02086C8.41128 3.99624 8.78977 4.13422 9.0858 4.3883C9.38182 4.64237 9.57517 4.99521 9.62981 5.38103C9.73168 6.15185 9.92059 6.9087 10.1929 7.63713C10.3012 7.9245 10.3246 8.23682 10.2604 8.53707C10.1963 8.83732 10.0472 9.11292 9.83093 9.33121L8.80925 10.3509C9.95446 12.3609 11.6221 14.0252 13.6361 15.1682L14.6578 14.1485C14.8765 13.9326 15.1527 13.7839 15.4535 13.7198C15.7544 13.6558 16.0673 13.6792 16.3552 13.7872C17.0851 14.059 17.8435 14.2476 18.6158 14.3492C19.0066 14.4042 19.3635 14.6007 19.6186 14.9012C19.8737 15.2017 20.0093 15.5853 19.9995 15.9791Z"
                    stroke="#646464"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="10"
                  height="30"
                  viewBox="0 0 10 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5"
                    cy="24"
                    r="2.5"
                    transform="rotate(-90 5 24)"
                    fill="#969696"
                  />
                  <circle
                    cx="5"
                    cy="15"
                    r="2.5"
                    transform="rotate(-90 5 15)"
                    fill="#969696"
                  />
                  <circle
                    cx="5"
                    cy="6"
                    r="2.5"
                    transform="rotate(-90 5 6)"
                    fill="#969696"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.body}>
            {chat?.messages.map((el, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  el.sender === "me" ? styles.myMessage : styles.theirMessage
                }`}
              >
                <p className={styles.text}>{el.text}</p>
                <span className={styles.time}>{el.time}</span>
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            <div className={styles.inputWrapper}>
              <button className={styles.emoji}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.15 11.1C15.8956 11.1 16.5 10.4956 16.5 9.75C16.5 9.00442 15.8956 8.4 15.15 8.4C14.4044 8.4 13.8 9.00442 13.8 9.75C13.8 10.4956 14.4044 11.1 15.15 11.1Z"
                    fill="#969696"
                  />
                  <path
                    d="M8.85 11.1C9.59558 11.1 10.2 10.4956 10.2 9.75C10.2 9.00442 9.59558 8.4 8.85 8.4C8.10442 8.4 7.5 9.00442 7.5 9.75C7.5 10.4956 8.10442 11.1 8.85 11.1Z"
                    fill="#969696"
                  />
                  <path
                    d="M12 17.4C14.052 17.4 15.798 15.906 16.5 13.8H7.5C8.202 15.906 9.948 17.4 12 17.4Z"
                    fill="#969696"
                  />
                  <path
                    d="M11.991 3C7.023 3 3 7.032 3 12C3 16.968 7.023 21 11.991 21C16.968 21 21 16.968 21 12C21 7.032 16.968 3 11.991 3ZM12 19.2C8.022 19.2 4.8 15.978 4.8 12C4.8 8.022 8.022 4.8 12 4.8C15.978 4.8 19.2 8.022 19.2 12C19.2 15.978 15.978 19.2 12 19.2Z"
                    fill="#969696"
                  />
                </svg>
              </button>
              <input
                className={styles.input}
                type="text"
                placeholder="Type a message..."
              />
              <button className={styles.file}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 11.4696L12.4356 19.0497C11.5089 19.9783 10.252 20.5 8.94144 20.5C7.63089 20.5 6.37401 19.9783 5.44731 19.0497C4.52061 18.1211 4 16.8616 4 15.5483C4 14.2351 4.52061 12.9756 5.44731 12.047L13.0117 4.46687C13.6295 3.84779 14.4675 3.5 15.3412 3.5C16.2149 3.5 17.0528 3.84779 17.6706 4.46687C18.2884 5.08595 18.6355 5.9256 18.6355 6.80111C18.6355 7.67662 18.2884 8.51628 17.6706 9.13535L10.0979 16.7154C9.78902 17.025 9.37006 17.1989 8.93321 17.1989C8.49636 17.1989 8.0774 17.025 7.7685 16.7154C7.4596 16.4059 7.28606 15.9861 7.28606 15.5483C7.28606 15.1106 7.4596 14.6907 7.7685 14.3812L14.7568 7.38674"
                    stroke="#969696"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className={styles.voiceMsg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 10.3636V12C17.5 13.519 16.9205 14.9757 15.8891 16.0498C14.8576 17.1239 13.4587 17.7273 12 17.7273M12 17.7273C10.5413 17.7273 9.14236 17.1239 8.11091 16.0498C7.07946 14.9757 6.5 13.519 6.5 12V10.3636M12 17.7273V21M8.85714 21H15.1429M12 3C11.3748 3 10.7753 3.2586 10.3332 3.71892C9.8912 4.17924 9.64286 4.80356 9.64286 5.45455V12C9.64286 12.651 9.8912 13.2753 10.3332 13.7356C10.7753 14.1959 11.3748 14.4545 12 14.4545C12.6252 14.4545 13.2247 14.1959 13.6668 13.7356C14.1088 13.2753 14.3571 12.651 14.3571 12V5.45455C14.3571 4.80356 14.1088 4.17924 13.6668 3.71892C13.2247 3.2586 12.6252 3 12 3Z"
                    stroke="#969696"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className={styles.sendBtn}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 1L9.1 10.9M19 1L12.7 19L9.1 10.9M19 1L1 7.3L9.1 10.9"
                  stroke="#969696"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatWindow;
