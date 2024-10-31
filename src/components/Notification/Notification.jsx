"useclient"
import Image from "next/image";
import styles from "./Notification.module.css";
import { useDispatch } from "react-redux";
import { toogleNotification } from "../../../utils/notificationSlice";

const Notification = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toogleNotification());
    }
    return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <Image src="/Vector (2).png" width={13} height={16} className={styles.img} />
                    <p className={styles.topText}>Class 7 Math is starting in 1 hour, 34 minutes.</p>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.text}>You can join the live class 5 minutes before it starts. Please wait.</p>
                    <button className={styles.btn} onClick={() => handleClick()}>Okay</button>
                </div>
            </div>

    )
}

export default Notification;