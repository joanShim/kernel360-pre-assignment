import MentorCard from "./MentorCard";
import { Title } from "./Title";
import * as S from "./CardGrid.style";

export default function CardGrid({ title, data }) {
  return (
    <section style={{ padding: "32px 30px" }}>
      <Title>{title}</Title>
      <S.Grid>
        {data.map((data, index) => (
          <MentorCard key={index} mentor={data} detailed/>
        ))}
      </S.Grid>
    </section>
  );
}
