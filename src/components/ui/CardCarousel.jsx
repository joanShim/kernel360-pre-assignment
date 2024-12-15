import { Title } from "./Title";
import * as S from "./CardCarousel.style";
import MentorCard from "./MentorCard";
export default function CardCarousel({ title, data }) {
  return (
    <section style={{ padding: "32px 30px"}}>
      <Title>{title}</Title>
      <S.CarouselContainer id="carousel">
        {data.length > 0 &&
          data.map((data, index) => (
            <S.CarouselItem key={index}>
              <MentorCard mentor={data} />
            </S.CarouselItem>
          ))}
      </S.CarouselContainer>
    </section>
  );
}
