import Section1 from "../components/headless-checkout/Section1";
import Section2 from "../components/headless-checkout/Section2";
import Section3 from "../components/headless-checkout/Section3";
import Section4 from "../components/headless-checkout/Section4";
import Section5 from "../components/headless-checkout/Section5";
import Section6 from "../components/headless-checkout/Section6";
import Section7 from "../components/headless-checkout/Section7";
import MainLight from "../ui/MainLight";

export default function HeadlessCheckout() {
  return (
    <MainLight>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </MainLight>
  );
}
