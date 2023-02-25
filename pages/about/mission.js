import Head from 'next/head'
import Mission from '../../src/Components/Pages/AboutUs/Mission'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mission/>
    </div>
  )
}
