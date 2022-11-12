import styles from '../styles/DefaultStages.module.css'
import Image from 'next/image'

export default function QR() {
  return (
    <>
        <div className={styles.qr}>
            <Image
                src="/img/qr.png"
                width={200}
                height={200}
                alt="QR CODE"
            />
            <p>https://spla3-stage-schedule.vercel.app/</p>
        </div>
    </>
  )
}
