import { notification } from "antd";

type NotificationType = string;

const notificationApi = () => {
  const notify = ({ type }: { type: NotificationType }) => {
    switch (type) {
      case "full":
        return notification.error({
          message: "ILtimos barcha bo'shliqlarni to'ldiring",
        });
      case "login":
        return notification.success({
          message: "Ro'yxatdan muvoffaqqiyatli o'tdingiz",
        });

      case "emaill":
        return notification.success({
          message: "Emailga tasdiqlash codi yuborildi!",
        });
      case "notEmail":
        return notification.error({
          message: "Email topilmadi!",
        });
      case "notEmail2":
        return notification.error({
          message: "Email yoki parol xato!",
        });
      case "forma":
        return notification.error({
          message: "Email formati noto'g'ri!",
        });
      case "errorCod":
        return notification.error({
          message: "Tasdiqlash codi xato!",
        });
      case "suscessverfy":
        return notification.success({
          message: "Cod to'gri!",
        });
      case "parol":
        return notification.success({
          message: "Parol yangilandi!",
        });

      default:
        break;
    }
  };
  return notify;
};

export default notificationApi;
