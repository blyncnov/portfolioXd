import Head from 'next/head'

import Navigation from "../components/Navigation"
import HeroIntro from "../components/HeroIntro"
import Services from '../components/Services'
import FloatComponents from '../components/FloatComponents'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Blyncnov - Frontend Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <HeroIntro />
      <Services/>
      <FloatComponents  value="bholuwatife00@gmail.com"/>
      <FloatComponents left="1em" right="0" value="https://github.com/blyncnov" />
      
    </>
  )
}
