import Hero from "@/components/_blocks/hero/hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Temporary spacer so the navbar scroll state can be reviewed. */}
      <div className="h-[100vh]" />
    </>
  );
}
