import Head from 'next/head'
import Values from '../../src/Components/Pages/AboutUs/Values'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Values/>
    </div>
  )
}
