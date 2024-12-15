import Notification from "../ui/Notification";
import ProfilePic from "../ui/ProfilePic";
import * as S from "./Header.style";
export default function Header() {
  return (
    <S.Header>
      <S.Logo src="/assets/images/KernelMentor.png" />
      <S.Actions>
        <Notification hasNewNotice={true} />
        <ProfilePic src="/assets/images/myProfilePic.png" />
      </S.Actions>
    </S.Header>
  );
}
