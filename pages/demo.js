import Head from 'next/head'
import Demo from '../src/Components/Pages/Demo'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Demo/>

    </div>
  )
}
