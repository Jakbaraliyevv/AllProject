import { notification } from "antd";

type NotificationType = string;

const notificationApi = () => {
  const notify = ({ type }: { type: NotificationType }) => {
    switch (type) {
      case "register":
        return notification.success({
          message: "Siz ro‘yxatdan muvaffaqiyatli o‘tdingiz",
        });

      default:
        break;
    }
  };
  return notify;
};

export default notificationApi;
