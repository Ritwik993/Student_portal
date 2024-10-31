"use client"
import Image from "next/image";
import styles from "./VideoContainer.module.css";
import { useDispatch } from "react-redux";
import { toogleVideo } from "../../../utils/videoSlice";

const VideoContainer=()=>{
    const dispatch=useDispatch();
    function handleCross(){
        dispatch(toogleVideo());
    }
    return(
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.text}>
                <p className={styles.subtitle}>Class 7 Science</p>
                <h1 className={styles.title}>Fundamentals of Organic Chemistry</h1>
                </div>   
                <div className={styles.imageCross} onClick={()=>handleCross()}>
                    <Image src="/close-circle.png" fill/>
                </div>
            </div>
            <div className={styles.videoImage}>
            <Image src="/Frame 1.png" width={1120} height={630}  className={styles.img}/>
            </div>
        </div>
    )
}

export default VideoContainer;