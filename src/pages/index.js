import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          HAUSCRTech Development Hub
        </h1>

        <p className="description">
          Navigate to your respective page, build components, and save to <code>\src\components\</code>
        </p>

        <div className="grid">
          <Link href="/login">
            <a className="card">
              <h3>Andrew &rarr;</h3>
              <p>Login</p>
            </a>
          </Link>

          <Link href="/tasks">
            <a className="card">
              <h3>Jeffrey &rarr;</h3>
              <p>Tasks (Navbar)</p>
            </a>
          </Link>

          <Link href="/tasks">
            <a className="card">
              <h3>Luke &rarr;</h3>
              <p>Miscellaneous</p>
            </a>
          </Link>

          <Link href="/tasks">
            <a className="card">
              <h3>Michelle &rarr;</h3>
              <p>Tasks</p>
            </a>
          </Link> 

          <Link href="/login">
            <a className="card">
              <h3>Stephanie &rarr;</h3>
              <p>Login</p>
            </a>
          </Link>

          <Link href="/tasks">
            <a className="card">
              <h3>Yoel &rarr;</h3>
              <p>Tasks</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <Link href="/"><a>Home</a></Link> &nbsp;&nbsp;&nbsp;
        <Link href="/login"><a>Login</a></Link> &nbsp;&nbsp;&nbsp;
        <Link href="/tasks"><a>Tasks</a></Link> &nbsp;&nbsp;&nbsp;
      </footer>
    </div>
  )
}
