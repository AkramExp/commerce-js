import Section1 from "../components/dashboard.jsx/Section1";
import Section2 from "../components/dashboard.jsx/Section2";
import Section3 from "../components/dashboard.jsx/Section3";
import Section4 from "../components/dashboard.jsx/Section4";
import MainLight from "../ui/MainLight";

export default function Dashboard() {
  return (
    <MainLight>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </MainLight>
  );
}
