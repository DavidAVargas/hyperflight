import Hero from "@/components/_blocks/hero/hero";
import CredentialsMarquee from "@/components/_blocks/services/credentials-marquee";
import About from "@/components/_blocks/about/about";
import Services from "@/components/_blocks/services/services";
import Partnerships from "@/components/_blocks/partnerships/partnerships";

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialsMarquee />
      <Services />
      <Partnerships />
      <About />
    </>
  );
}
