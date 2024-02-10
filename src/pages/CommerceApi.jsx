import Section1 from "../components/commerce-api/Section1";
import Section2 from "../components/commerce-api/Section2";
import Section3 from "../components/commerce-api/Section3";
import Section4 from "../components/commerce-api/Section4";
// import Section5 from "../components/commerce-api/Section5";
import Section6 from "../components/commerce-api/Section6";
import Section7 from "../components/commerce-api/Section7";
import MainDark from "../ui/MainDark";

export default function CommerceApi() {
  return (
    <MainDark>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
    </MainDark>
  );
}
