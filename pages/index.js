import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Intro from '@components/intro'

// try this for fonts
// https://prismic.io/blog/nextjs-fonts

// setup background with https://tailwindcss.com/docs/background-color

export default function Home() {
  return (
    <div className="page-container">
      <Head>
        <title>Next.js Starter!</title>
      </Head>

      <main className="bg-red-500">
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
