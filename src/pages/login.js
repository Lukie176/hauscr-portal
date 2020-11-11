import Head from 'next/head'
import Link from 'next/link'
import SigninCard from '../components/signin'
import LeftLogo from '../components/leftlogo'
 
export default function Home() {
  const split_style = {
    height: "100%",
    flex: "1",
    textAlign: "center",
  }

  const split_style_right = {
    height: "100%",
    width: "50%",
    margin: "5% !important",
    backgroundColor: "rgba(174, 54, 70, 0.6)",
    borderRadius: "5px",
    opacity: "0.7",
    zIndex: "-1",
    flex: "1",
    textAlign: "center",
  }

  const canvas_style = {
    padding: "0",
    display: "flex",
    flexDirection: "row",
    zIndex: '3',
  }

  const dark_overlay = {
    zIndex: '1',
    height: '100%',
    width: '100%',
    position: 'fixed',
    overflow: 'auto',
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
    background: 'rgba(0, 0, 0, 0.7)'
  }

  const imageResize = {
    height: '100%',
    width: '100%',
    position: 'fixed',
    overflow: 'auto',
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
  }

  return (
    <div className="container">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={dark_overlay}>
        <img src="/shanghai_image.png" style={imageResize}></img>
      </div>
      <main style={canvas_style} className="canvas">
        <div style={split_style} className="split">
          <LeftLogo />
        </div>
        <div style={split_style_right} className="split">
          <SigninCard />
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
