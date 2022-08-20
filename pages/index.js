import Head from "next/head";

import Navigation from "../components/Navigation";
import HeroIntro from "../components/HeroIntro";
import Services from "../components/Services";
import FloatComponents from "../components/FloatComponents";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blyncnov | Front-End Engineer</title>
        <meta
          name="description"
          content="Blyncnov - Frontend Developer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <HeroIntro />
      <Services />

      <Projects />
      <Contact />
    </>
  );
}
