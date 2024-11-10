import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Intro from '@components/intro'

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Next.js Starter!</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header />
        <div className='content-container'>
          About stuff
        </div>
      </main>

      <Footer />
    </div>
  )
}
