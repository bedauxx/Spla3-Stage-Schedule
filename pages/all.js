import Head from 'next/head'
import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link'
import { VFXSpan } from 'react-vfx'
import styles from '../styles/Home.module.css'
import AllStages from '../component/AllStages.js'
import { Tab } from '@headlessui/react'
import QR from '../component/qr.js'
import { GetStaticProps } from 'next'

export default function Home({schedule,salmonSchedule}) {
  return (
    <div className={styles.container}>
      <Head prefix='og:http://ogp.me/ns#'>
        <title>Spla3 Stage Schedule</title>
        <meta name="description" content="スプラ3のステージスケジュール" />
        <meta property="og:url" content="https://spla3-stage-schedule.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Spla3 Stage Schedule" />
        <meta property="og:description" content="スプラ3のステージスケジュール" />
        <meta property="og:site_name" content="Spla3 Stage Schedule" />
        <meta property="og:image" content="https://spla3-stage-schedule.vercel.app/img/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@missplatoon" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <VFXSpan shader="glitch">Spla3 Stage Schedule</VFXSpan>
        </h1>


        <AllStages schedule={schedule}></AllStages>

        <Link href="/" className={styles.link}>home</Link>

      </main>

      <footer className={styles.footer}>
        <p>Developed by <Link href="https://twitter.com/missplatoon">@missplatoon</Link>{" "}
        This APP using <Link href="https://spla3.yuu26.com/">Spla3 API</Link></p>
      </footer>
    </div>
  )
}

export const getStaticProps = async() => {
  const req = new Request("https://spla3.yuu26.com/api/schedule", {
    headers: {
      "user-agent": "S3/1.0(twitter@missplatoon)",
    },
  });
  const res = await fetch(req)
  const schedule = await res.json()

  const salmon_req = new Request("https://spla3.yuu26.com/api/coop-grouping-regular/schedule", {
    headers: {
      "user-agent": "S3/1.0(twitter@missplatoon)",
    },
  });
  const salmon_res = await fetch(salmon_req)
  const salmonSchedule = await salmon_res.json()

  return {
    props: { schedule,salmonSchedule }, // will be passed to the page component as props
  }
}