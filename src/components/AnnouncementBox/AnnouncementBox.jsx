import Image from "next/image";
import styles from "./AnnouncementBox.module.css";

const AnnouncementBox=({data})=>{
    
    return(
        <div className={styles.container} >
            {data.reminder?
            <Image src="/clipboard-text.png" width={24} height={24} className={styles.img}/>
             :<Image src="/sun.png" width={24} height={24} className={styles.img}/>
            }
            <p className={styles.text}>{data.text}</p>
        </div>
    )
    /**/
}

export default AnnouncementBox;