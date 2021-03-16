import Head from 'next/head'
import Link from 'next/link'
import Title from "../components/Title"
import Navigation from '../components/Navigation'
import Reimbursements from '../components/Reimbursements'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reimbursements</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navigation route="reimbursements"/>
      
      <main className="content">
        <Title title="Reimbursements" />
        <Reimbursements />
      </main>
    </div>
  )
}
