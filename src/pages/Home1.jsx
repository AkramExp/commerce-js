import Section1 from "../components/home1/Section1";
import Section2 from "../components/home1/Section2";
import Section3 from "../components/home1/Section3";
import Section4 from "../components/home1/Section4";
import Section5 from "../components/home1/Section5";
import Section6 from "../components/home1/Section6";
import Section7 from "../components/home1/Section7";
import Section8 from "../components/home1/Section8";
import MainLight from "../ui/MainLight";

export default function Home() {
  return (
    <MainLight>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </MainLight>
  );
}
