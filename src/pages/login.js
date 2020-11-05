import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Login
        </h1>

        <p className="description">
          This is a boilerplate template for the Login Page <code>/login</code>
        </p>
      </main>

      <footer>
        <Link href="/"><a>Home &nbsp;</a></Link>
        <Link href="/login"><a>Login &nbsp;</a></Link>
        <Link href="/tasks"><a>Tasks &nbsp;</a></Link>
      </footer>
    </div>
  )
}
