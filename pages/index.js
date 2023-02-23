import Head from 'next/head'
import HomePage from '../src/Components/Pages/HomePage'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>

    </div>
  )
}
