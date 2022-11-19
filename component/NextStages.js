import styles from '../styles/DefaultStages.module.css'
import Moment from 'react-moment'
import Image from 'next/image'

export default function CurrentStages({ schedule }) {
  return (
    <>
        {(() => {
          if (schedule.result.regular[0].is_fest != true) {
            {/* 通常ステージ */} 
            return (
                <div className={styles.entry}>
                <h2>Next Stages</h2>
                <h3 className='stage-schedule'>
                  <Moment format="MM/DD H:mm">
                      {schedule.result.regular[1].start_time}
                  </Moment>
                  {' '}〜{' '}
                  <Moment format="MM/DD H:mm">
                      {schedule.result.regular[1].end_time}
                  </Moment>
                </h3>
                <div className={styles.rules}>
                  <div>
                    <h3>
                    ナワバリバトル
                    </h3>
                    <ul className={styles.stageList}>
                        <li>
                          <p>{schedule.result.regular[1].stages[0].name}</p>
                          <Image
                            src={schedule.result.regular[1].stages[0].image}
                            width={128}
                            height={64}
                            alt="stage-pic"
                          />
                        </li>
                        <li>
                          <p>{schedule.result.regular[1].stages[1].name}</p>
                          <Image
                              src={schedule.result.regular[1].stages[1].image}
                              width={128}
                              height={64}
                              alt="stage-pic"
                            />
                        </li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                    バンカラマッチ(チャレンジ)<br />({schedule.result.bankara_challenge[1].rule.name})
                    </h3>
                    <ul className={styles.stageList}>
                        <li>
                          <p>{schedule.result.bankara_challenge[1].stages[0].name}</p>
                          <Image
                              src={schedule.result.bankara_challenge[1].stages[0].image}
                              width={128}
                              height={64}
                              alt="stage-pic"
                            />
                        </li>
                        <li>
                          <p>{schedule.result.bankara_challenge[1].stages[1].name}</p>
                          <Image
                              src={schedule.result.bankara_challenge[1].stages[1].image}
                              width={128}
                              height={64}
                              alt="stage-pic"
                            />
                        </li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                    バンカラマッチ(オープン)<br />({schedule.result.bankara_open[1].rule.name})
                    </h3>
                    <ul className={styles.stageList}>
                        <li>
                          <p>{schedule.result.bankara_open[1].stages[0].name}</p>
                          <Image
                              src={schedule.result.bankara_open[1].stages[0].image}
                              width={128}
                              height={64}
                              alt="stage-pic"
                            />
                        </li>
                        <li>
                          <p>{schedule.result.bankara_open[1].stages[1].name}</p>
                          <Image
                              src={schedule.result.bankara_open[1].stages[1].image}
                              width={128}
                              height={64}
                              alt="stage-pic"
                            />
                        </li>
                    </ul>
                  </div>
                </div>
            </div>
            )
          } else {
            {/* フェスステージ */} 
            return (
                <div className={styles.entry}>
                <h2>Next Stages</h2>
                <h3 className='stage-schedule'>
                  <Moment format="MM/DD H:mm">
                      {schedule.result.fest[1].start_time}
                  </Moment>
                  {' '}〜{' '}
                  <Moment format="MM/DD H:mm">
                      {schedule.result.fest[1].end_time}
                  </Moment>
                </h3>
                <div className={styles.rules}>
                  <div>
                    <h3>
                    フェス
                    </h3>
                    <ul className={styles.stageList}>
                        <li>
                          <p>{schedule.result.fest[1].stages[0].name}</p>
                          <Image
                            src={schedule.result.fest[1].stages[0].image}
                            width={128}
                            height={64}
                            alt="stage-pic"
                          />
                        </li>
                        <li>
                          <p>{schedule.result.fest[1].stages[1].name}</p>
                          <Image
                              src={schedule.result.fest[1].stages[1].image}
                              width={128}
                              height={64}
                              alt="stage-pic"
                            />
                        </li>
                    </ul>
                  </div>
                </div>
            </div>
            )
          }
        })()}
    </>
  )
}
