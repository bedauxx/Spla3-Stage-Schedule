import Head from 'next/head'
import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import DefaultStages from '../component/DefaultStages.js'
import FestStages from '../component/FestStages.js'
import { GetStaticProps } from 'next'

export default function Home({schedule}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spla3 Stage Schedule</title>
        <meta name="description" content="Spla3 Stage Schedule" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
        Spla3 Stage Schedule
        </h1>
        {(() => {
          if (schedule.result.regular[0].is_fest != true) {
            return <DefaultStages schedule={schedule}></DefaultStages>
          } else {
            return <FestStages schedule={schedule}></FestStages>
          }
        })()}

        
        

      </main>

      <footer className={styles.footer}>
        <p>This APP using <Link href="https://spla3.yuu26.com/">Spla3 API</Link></p>
      </footer>
    </div>
  )
}

export const getStaticProps = async() => {
// export async function getStaticProps() でも同じ
  const req = new Request("https://spla3.yuu26.com/api/schedule", {
    headers: {
      "user-agent": "S3/1.0(twitter@missplatoon)",
    },
  });
  const res = await fetch(req)
  const schedule = await res.json()
  //console.log("-----------------------------------------------------------------------------")
  //console.log(schedule.result.regular[0])

  return {
    props: { schedule }, // will be passed to the page component as props
  }
}