import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/BebasNeue-Regular.ttf"
            as="font"
            crossOrigin=""
          />
        <link
            rel="preload"
            href="/SourceSansPro-Light.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <Navigation />
      <main className="content">
        <h1 className="title">
          HAUSCRTech Dev Hub
        </h1>

        <p className="description">
          Navigate to your respective page, build components, and save to <code>\src\components\</code>
        </p>
      </main>
    </div>
  )
}
