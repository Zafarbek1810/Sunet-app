import Head from 'next/head'
import Employer from '../../src/Components/Pages/Careers/Employer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Employer/>

    </div>
  )
}
