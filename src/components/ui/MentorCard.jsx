import { Files, Star } from "lucide-react";
import FollowButton from "./FollowButton";
import * as S from "./MentorCard.style";
import ProfilePic from "./ProfilePic";

export default function MentorCard({ mentor, detailed }) {
  const {
    name,
    job,
    image,
    introduction,
    isFollowed,
    numOfTask,
    reviewScore,
    reviewCount,
  } = mentor;

  console.log(mentor);
  return (
    <>
      <S.Card>
        <S.Flex>
          <S.Flex>
            <ProfilePic src={image} />
            <S.NameWrapper>
              <S.Name>{name}</S.Name>
              <S.Job>{job}</S.Job>
            </S.NameWrapper>
          </S.Flex>
          <FollowButton isFollowed={isFollowed} />
        </S.Flex>
        {detailed && <S.Introduction>{introduction}</S.Introduction>}

        <S.StatsSection>
          <S.StatItem>
            <S.StatIcon>
              <Files size={16} />
            </S.StatIcon>
            <S.StatText>{numOfTask} Task</S.StatText>
          </S.StatItem>
          <S.StatItem>
            <Star color="#FFB054" fill="#FFB054" />
            <S.StatText>
              {reviewScore} ({reviewCount} Reviews)
            </S.StatText>
          </S.StatItem>
        </S.StatsSection>
      </S.Card>
    </>
  );
}
