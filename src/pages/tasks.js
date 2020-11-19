import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navbar'
import TaskHolder from '../components/TaskHolder'

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

        <TaskHolder />
        
      </main>
    </div>
  )
}
