import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Intro from '@components/intro'

// colors, pink mono
// ffe5ec
// ffc2d1
// ffb3c6
// ff8fab
// fb6f92

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alice&display=swap" rel="stylesheet"/>
      </Head>

      <main>
        <Header />
        <div className='content-container'>
          <Intro
            title="Kristyna Hablova"
            subtitle="something below the name?"
            intro="this is an intro lorem ipsum bla bal"
          />
        </div>
        <div className='content-container'>
          <Intro
            title="akdhakjdhaksjsdjasd"
            subtitle="ashdkajsd jkashdjkashdjka"
            intro="this is an intro lorem ipsum bla bal"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
