import Head from 'next/head'
import OurOffices from '../src/Components/Pages/OurOffices'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OurOffices/>

    </div>
  )
}
