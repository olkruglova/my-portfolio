import React, { ReactNode, useState } from "react";
import { NotificationType, NotificationContext } from "./NotificationContext";

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }): any => {
  const [notification, setNotificationState] = useState<NotificationType>({ type: "success", message: "" });
  const [show, setShow] = useState(false);

  const setNotification = (value: NotificationType) => {
    setNotificationState(value);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ show, notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
