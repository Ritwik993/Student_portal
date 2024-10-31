import Image from "next/image";
import styles from "./ClassSchedule.module.css";

const ClassSchedule = ({data}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <Image src="/video.png" width={20} height={20} className={styles.img}/>
                <div className={styles.innerText}>
                    <p className={styles.subtitle}>{data.subject}</p>
                    <p className={styles.title}>{data.time}</p>
                </div>
            </div>
            <div className={styles.timing}>{data.day}</div>
        </div>
    )
}

export default ClassSchedule;