import Image from "next/image";
import styles from "./NoLive.module.css";

const NoLive = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            <Image src="/Logo1.svg" width={26} height={26} className={styles.img} />
            </div>
            <p className={styles.title}>No Live Classes</p>
            <p className={styles.subtitle}>You have no live classes scheduled for today.</p>
        </div>
    )
}

export default NoLive;