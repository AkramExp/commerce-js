import Section1 from "../components/jamstack/Section1";
import Section2 from "../components/jamstack/Section2";
import Section3 from "../components/jamstack/Section3";
import Section4 from "../components/jamstack/Section4";
// import Section5 from "../components/jamstack/Section5";
import Section6 from "../components/jamstack/Section6";
import Section7 from "../components/jamstack/Section7";
import Section8 from "../components/jamstack/Section8";
import MainDark from "../ui/MainDark";

export default function Jamstack() {
  return (
    <MainDark>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
      <Section8 />
    </MainDark>
  );
}
