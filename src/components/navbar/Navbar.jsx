"use client"
import Image from "next/image";
import styles from "./Navbar.module.css"
import { useSelector } from "react-redux";

const Navbar = () => {
  const toggle = useSelector(store => store.video.isOpen);
  const notificationToggle = useSelector(store => store.notification.isOpen);

    return (
        <div className={`${styles.container} ${toggle ? styles.active : ""} ${notificationToggle?styles.shadow:""} `}>

            <Image src="/Logo.png" width={100} height={50} />

            <div className={styles.title}>Student Portal</div>
            <div className={styles.rightText}>
                <span className={styles.text1}>Hello,Gabrisa!</span>
                <span className={styles.text2}>Class 7, Math+Science</span>
            </div>
        </div>
    )
}

export default Navbar;