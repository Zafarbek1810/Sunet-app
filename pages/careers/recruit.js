import Head from 'next/head'
import Recruit from '../../src/Components/Pages/Careers/Recruit'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recruit/>

    </div>
  )
}
