import styles from '../styles/DefaultStages.module.css'
import Moment from 'react-moment'
import Image from 'next/image'
import { Tab } from '@headlessui/react'

export default function AllStages({ schedule }) {
  return (
    <>
    <Tab.Group>
      <Tab.List className={styles.tabs}>
        <Tab className={styles.tab}><Image src='/img/icons/regular.svg' width={30} height={30} alt="" />ナワバリ</Tab>
        <Tab className={styles.tab}><Image src='/img/icons/bankara.svg' width={30} height={30} alt="" />チャレンジ</Tab>
        <Tab className={styles.tab}><Image src='/img/icons/bankara.svg' width={30} height={30} alt="" />オープン</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
            <ul>
                {schedule.result.regular.map(({stages,start_time,end_time}) =>
                    <li>
                        <div className={styles.entry}>
                            <h3 className='stage-schedule'>
                                <Moment format="MM/DD H:mm">{start_time}</Moment>
                                {' '}〜{' '}
                                <Moment format="MM/DD H:mm">{end_time}</Moment>
                            </h3>
                            <ul className={styles.stageList}>
                                <li>
                                <p>{stages[0].name}</p>
                                <Image
                                    src={stages[0].image}
                                    width={128}
                                    height={64}
                                    alt="stage-pic"
                                />
                                </li>
                                <li>
                                <p>{stages[1].name}</p>
                                <Image
                                    src={stages[1].image}
                                    width={128}
                                    height={64}
                                    alt="stage-pic"
                                    />
                                </li>
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </Tab.Panel>
        <Tab.Panel>
            <ul>
                {schedule.result.bankara_challenge.map(({rule, stages,start_time,end_time}) =>
                    <li>
                        <div className={styles.entry}>
                            <h3 className='stage-schedule'>
                                <Moment format="MM/DD H:mm">{start_time}</Moment>
                                {' '}〜{' '}
                                <Moment format="MM/DD H:mm">{end_time}</Moment>
                            </h3>
                            <h3>{rule.name}</h3>
                            <ul className={styles.stageList}>
                                <li>
                                <p>{stages[0].name}</p>
                                <Image
                                    src={stages[0].image}
                                    width={128}
                                    height={64}
                                    alt="stage-pic"
                                />
                                </li>
                                <li>
                                <p>{stages[1].name}</p>
                                <Image
                                    src={stages[1].image}
                                    width={128}
                                    height={64}
                                    alt="stage-pic"
                                    />
                                </li>
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </Tab.Panel>
        <Tab.Panel>
            <ul>
                {schedule.result.bankara_open.map(({rule, stages,start_time,end_time}) =>
                    <li>
                        <div className={styles.entry}>
                            <h3 className='stage-schedule'>
                                <Moment format="MM/DD H:mm">{start_time}</Moment>
                                {' '}〜{' '}
                                <Moment format="MM/DD H:mm">{end_time}</Moment>
                            </h3>
                            <h3>{rule.name}</h3>
                            <ul className={styles.stageList}>
                                <li>
                                <p>{stages[0].name}</p>
                                <Image
                                    src={stages[0].image}
                                    width={128}
                                    height={64}
                                    alt="stage-pic"
                                />
                                </li>
                                <li>
                                <p>{stages[1].name}</p>
                                <Image
                                    src={stages[1].image}
                                    width={128}
                                    height={64}
                                    alt="stage-pic"
                                    />
                                </li>
                            </ul>
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
