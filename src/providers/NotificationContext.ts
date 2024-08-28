import { createContext } from "react";

export interface NotificationType {
  type: "success" | "error";
  message: string;
}

export const defaultNotificationValue = {
  show: false,
  notification: {} as NotificationType,
  setNotification: (value: NotificationType) => {}
};

export const NotificationContext = createContext<{
  show: boolean;
  notification: NotificationType;
  setNotification: (value: NotificationType) => void;
}>(defaultNotificationValue);
