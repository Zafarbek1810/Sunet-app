import Head from 'next/head'
import OurHistory from '../../src/Components/Pages/AboutUs/OurHistory'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OurHistory/>

    </div>
  )
}
