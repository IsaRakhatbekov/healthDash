export type ChatTab = "all" | "unread" | "archive";

export interface ChatPreview {
  id: string;
  name: string;
  message: string;
  time: string;
  unreadCount: number;
  status: string;
}
