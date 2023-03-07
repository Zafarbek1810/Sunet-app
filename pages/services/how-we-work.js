import Head from 'next/head'
import HowWork from '../../src/Components/Pages/HowWork'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HowWork/>

    </div>
  )
}
