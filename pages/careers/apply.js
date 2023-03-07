import Head from 'next/head'
import Apply from '../../src/Components/Pages/Careers/Apply'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Apply/>

    </div>
  )
}
