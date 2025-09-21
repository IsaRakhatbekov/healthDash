export type ChatTab = "all" | "unread" | "archive";

export interface ChatPreview {
  id: string;
  name: string;
  message: string;
  time: string;
  unreadCount: number;
  status: string;
}

export interface Message {
  sender: "me" | "them";
  text: string;
  time: string;
}

export interface ChatType extends ChatPreview {
  status: "unread" | "read" | "archived";
  messages: Message[];
}
