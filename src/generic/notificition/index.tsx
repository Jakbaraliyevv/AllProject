import { notification } from "antd";

type NotificationType = string;

const notificationApi = () => {
  const notify = ({ type }: { type: NotificationType }) => {
    switch (type) {
      case "error":
        return notification.error({
          message: "ILtimos barcha bo'shliqlarni to'ldiring",
        });

      default:
        break;
    }
  };
  return notify;
};

export default notificationApi;
