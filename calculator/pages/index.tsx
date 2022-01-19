import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Calculator } from '../components/calculator'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Calculator />
      </main>
    </div>
  )
}

export default Home