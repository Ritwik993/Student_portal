import Image from "next/image";
import styles from "./LMSLinksBox.module.css";

const LMSLinksBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            <Image src="/Logo.svg" width={26} height={26} className={styles.img} />
            </div>
            <p className={styles.title}>Canvas LMS</p>
            <p className={styles.subtitle}>Click here to access your LMS portal for assignments, class recordings and notes.</p>
        </div>
    )
}

export default LMSLinksBox;