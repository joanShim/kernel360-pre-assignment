import { Bell } from "lucide-react";
import * as S from "./Notification.style";
export default function Notification({ hasNewNotice }) {
  return (
    <S.Notification>
      <Bell size={24} color="#8E92BC" />
      {hasNewNotice && <S.Badge />}
    </S.Notification>
  );
}
