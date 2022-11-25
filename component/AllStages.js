import styles from '../styles/DefaultStages.module.css'
import Moment from 'react-moment'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

export default function AllStages({ schedule }) {
  return (
    <>



    <Tab.Group>
      <Tab.List className={styles.tabs}>
        <Tab className={styles.tab}>ナワバリバトル</Tab>
        <Tab className={styles.tab}>バンカラマッチ(チャレンジ)</Tab>
        <Tab className={styles.tab}>バンカラマッチ(オープン)</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
            <ul>
                {schedule.result.regular.map(({index, stages,start_time,end_time}) =>
                    <li key={index}>
                        <div className={styles.entry}>
                            <p><Moment format="MM/DD H:mm">{start_time}</Moment>{' '}〜{' '}<Moment format="MM/DD H:mm">{end_time}</Moment></p>
                            <p>{stages[0].name}</p>
                            <p>{stages[1].name}</p>
                        </div>
                    </li>
                )}
            </ul>
        </Tab.Panel>
        <Tab.Panel>
            <ul>
                {schedule.result.bankara_challenge.map(({index, rule, stages,start_time,end_time}) =>
                    <li key={index}>
                        <div className={styles.entry}>
                            <p>{rule.name}</p>
                            <p><Moment format="MM/DD H:mm">{start_time}</Moment>{' '}〜{' '}<Moment format="MM/DD H:mm">{end_time}</Moment></p>
                            <p>{stages[0].name}</p>
                            <p>{stages[1].name}</p>
                        </div>
                    </li>
                )}
            </ul>
        </Tab.Panel>
        <Tab.Panel>
            <ul>
                {schedule.result.bankara_open.map(({index, rule, stages,start_time,end_time}) =>
                    <li key={index}>
                        <div className={styles.entry}>
                            <p>{rule.name}</p>
                            <p><Moment format="MM/DD H:mm">{start_time}</Moment>{' '}〜{' '}<Moment format="MM/DD H:mm">{end_time}</Moment></p>
                            <p>{stages[0].name}</p>
                            <p>{stages[1].name}</p>
                        </div>
                    </li>
                )}
            </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>




    </>
  )
}
