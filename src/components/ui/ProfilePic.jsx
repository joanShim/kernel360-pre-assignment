import * as S from "./ProfilePic.style";

export default function ProfilePic({ src, name, size }) {
  return (
    <S.ProfilePicWrapper size={size}>
      <S.ProfilePicImg src={src} alt={name + " profile pic"} />
    </S.ProfilePicWrapper>
  );
}
