import { useEffect, useState } from "react";
import CardCarousel from "../../components/ui/CardCarousel";
import Toolbar from "../../components/ui/Toolbar";
import recentMentorsData from "../../data/recent-mentors.json";
import mentorsData from "../../data/mentors.json";
import CardGrid from "../../components/ui/CardGrid";

export default function MentorsPage() {
  const [recentMentors, setRecentMentors] = useState([]);
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    setRecentMentors(recentMentorsData);
    setMentors(mentorsData);
  }, []);

  // console.log(recentMentors);
  return (
    <section>
      <Toolbar />
      {recentMentors.length > 0 && (
        <CardCarousel title="Recent Mentors" data={recentMentors} />
      )}
      {mentors.length > 0 && <CardGrid title="Mentors" data={mentors} />}
    </section>
  );
}
