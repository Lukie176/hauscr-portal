import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import TaskHolder from '../components/TaskHolder'
import Title from "../components/Title"

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Assignments</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navigation route="tasks"/>
      
      <main className="content">
        <Title title="My Assignments" />
        <TaskHolder />
      </main>
    </div>
  )
}
