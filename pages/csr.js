import Head from 'next/head'
import CSR from '../src/Components/Pages/CSR'

export default function Home() {
  return (
    <div >
      <Head>
        <title>SUNET</title>
        <meta name="description" content="SUNET" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CSR/>

    </div>
  )
}
