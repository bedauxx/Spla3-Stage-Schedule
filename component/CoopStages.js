import styles from '../styles/DefaultStages.module.css'
import Moment from 'react-moment'
import Image from 'next/image'

export default function CoopStages({ salmonSchedule }) {
  return (
    <>
    <div className={styles.entry}>
        <h2>サーモンラン</h2>
        <h2>Current Stage</h2>
        <h3 className='stage-schedule'>
            <Moment format="MM/DD H:mm">
                {salmonSchedule.results[0].start_time}
            </Moment>
            {' '}〜{' '}
            <Moment format="MM/DD H:mm">
                {salmonSchedule.results[0].end_time}
            </Moment>
        </h3>

        <div className={styles.rules}>
            <div>
            <h3>
            {salmonSchedule.results[0].stage.name}
            </h3>
            <Image
            src={salmonSchedule.results[0].stage.image}
            width={128}
            height={64}
            alt="stage-pic"
            />
            <ul className={styles.weaponList}>
                <li>
                    <p>{salmonSchedule.results[0].weapons[0].name}</p>
                    <Image
                    src={salmonSchedule.results[0].weapons[0].image}
                    width={128}
                    height={128}
                    alt="weapons-pic"
                    />
                </li>
                <li>
                    <p>{salmonSchedule.results[0].weapons[1].name}</p>
                    <Image
                    src={salmonSchedule.results[0].weapons[1].image}
                    width={128}
                    height={128}
                    alt="weapons-pic"
                    />
                </li>
                <li>
                    <p>{salmonSchedule.results[0].weapons[2].name}</p>
                    <Image
                    src={salmonSchedule.results[0].weapons[2].image}
                    width={128}
                    height={128}
                    alt="weapons-pic"
                    />
                </li>
                <li>
                    <p>{salmonSchedule.results[0].weapons[3].name}</p>
                    <Image
                    src={salmonSchedule.results[0].weapons[3].image}
                    width={128}
                    height={128}
                    alt="weapons-pic"
                    />
                </li>
            </ul>
            </div>
        </div>
    </div>

    <div className={styles.entry}>
            <h2>サーモンラン</h2>
            <h2>Next Stage</h2>
            <h3 className='stage-schedule'>
                <Moment format="MM/DD H:mm">
                    {salmonSchedule.results[1].start_time}
                </Moment>
                {' '}〜{' '}
                <Moment format="MM/DD H:mm">
                    {salmonSchedule.results[1].end_time}
                </Moment>
            </h3>

            <div className={styles.rules}>
                <div>
                <h3>
                {salmonSchedule.results[1].stage.name}
                </h3>
                <Image
                src={salmonSchedule.results[1].stage.image}
                width={128}
                height={64}
                alt="stage-pic"
                />
                <ul className={styles.weaponList}>
                    <li>
                        <p>{salmonSchedule.results[1].weapons[0].name}</p>
                        <Image
                        src={salmonSchedule.results[1].weapons[0].image}
                        width={128}
                        height={128}
                        alt="weapons-pic"
                        />
                    </li>
                    <li>
                        <p>{salmonSchedule.results[1].weapons[1].name}</p>
                        <Image
                        src={salmonSchedule.results[1].weapons[1].image}
                        width={128}
                        height={128}
                        alt="weapons-pic"
                        />
                    </li>
                    <li>
                        <p>{salmonSchedule.results[1].weapons[2].name}</p>
                        <Image
                        src={salmonSchedule.results[1].weapons[2].image}
                        width={128}
                        height={128}
                        alt="weapons-pic"
                        />
                    </li>
                    <li>
                        <p>{salmonSchedule.results[1].weapons[3].name}</p>
                        <Image
                        src={salmonSchedule.results[1].weapons[3].image}
                        width={128}
                        height={128}
                        alt="weapons-pic"
                        />
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </>
  )
}
