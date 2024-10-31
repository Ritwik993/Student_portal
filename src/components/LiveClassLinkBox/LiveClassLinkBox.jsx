import Image from "next/image";
import styles from "./LiveClassLinkBox.module.css";

const LiveClassLinkBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            <Image src="/Logo1.svg" width={26} height={26} className={styles.img} />
            </div>
            <p className={styles.title}>Join Live Class</p>
            <p className={styles.subtitle}>Click here to join your live class session. Please do not share this link.</p>
        </div>
    )
}

export default LiveClassLinkBox;