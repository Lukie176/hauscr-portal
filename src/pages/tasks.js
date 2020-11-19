import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Assignments</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navigation route="tasks"/>
      
      <main className="content">
        <h1 className="title">
          My Assignments
        </h1>

        <p className="description">
          This is a boilerplate template for the My Assignments page <code>/tasks</code>
        </p>
      </main>
    </div>
  )
}
