import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationContext";

const Notification: React.FC = () => {
  const { show, notification } = useContext(NotificationContext);

  if (!show) return null;

  return (
    <div
      className={`w-96 h-auto border-l-2 py-4 px-6 bg-gray-200 fixed top-4 right-4 z-50 flex flex-row ${
        notification.type === "success" ? "border-l-green-600" : "border-l-salmon"
      }`}
    >
      {notification.type === "success" ? (
        <CheckCircleIcon className="w-5 h-5 text-green-600" />
      ) : (
        <ExclamationCircleIcon className="w-5 h-5 text-salmon" />
      )}
      <p className="text-md text-dark-blue ml-3">{notification.message}</p>
    </div>
  );
};

export default Notification;
