"use client"
import Image from "next/image";
import styles from "./VideoList.module.css";
import { useDispatch } from "react-redux";
import { toogleVideo } from "../../../utils/videoSlice";

const VideoList = ({data}) => {
    const dispatch=useDispatch();
    const toggleVideo=()=>{
        dispatch(toogleVideo());
    }
    return (
        <div className={styles.parent} onClick={()=>toggleVideo()}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div>
                        <h3 className={styles.subtitle}>{data.subtitle}</h3>
                        <h2 className={styles.title}>{data.title}</h2>
                    </div>
                    <p className={styles.date}>{data.date}</p>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.innerImgContainer}>
                        <Image src="/video-circle.png" width={24} height={24} className={styles.innerImg} />
                        <div className={styles.overlay}>Play now</div>
                    </div>
                    <Image src="/Mask group.png" width={100} height={64} className={styles.img} />
                </div>
            </div>
        </div>

    )
}

export default VideoList;