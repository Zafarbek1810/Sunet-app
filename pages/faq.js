import Head from 'next/head'
import FAQ from '../src/Components/Pages/FAQ'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FAQ/>

    </div>
  )
}
