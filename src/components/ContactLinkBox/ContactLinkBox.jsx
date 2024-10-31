import Image from "next/image";
import styles from "./ContactLinkBox.module.css";

const ContactLinkBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            <Image src="/Logo2.svg" width={26} height={26} className={styles.img} />
            </div>
            <p className={styles.title}>Contact Teacher</p>
            <p className={styles.subtitle}>Click here to contact your teacher for any doubts or concerns.</p>
        </div>
    )
}

export default ContactLinkBox;