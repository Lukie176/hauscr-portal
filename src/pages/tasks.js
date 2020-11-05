import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navbar'
import TemplateComponent from "../components/TemplateComponent"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Assignments</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1 className="title">
          My Assignments
        </h1>

        <p className="description">
          This is a boilerplate template for the My Assignments page <code>/tasks</code>
        </p>
        <div>
          <TemplateComponent text="Custom Text 1" />
          <TemplateComponent text="Custom Text 2" />
        </div>
      </main>
      <Navigation></Navigation>
      <footer>
        <Link href="/"><a>Home &nbsp;</a></Link>
        <Link href="/login"><a>Login &nbsp;</a></Link>
        <Link href="/tasks"><a>Tasks &nbsp;</a></Link>
      </footer>
    </div>
  )
}
