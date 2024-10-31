"use client";
import styles from "./home.module.css"
import AnnouncementBox from "@/components/AnnouncementBox/AnnouncementBox";
import ClassSchedule from "@/components/ClassScheduleBox/ClassSchedule";
import LMSLinksBox from "@/components/LinksBox/LMSLinksBox";
import LiveClassLinkBox from "@/components/LiveClassLinkBox/LiveClassLinkBox";
import ContactLinkBox from "@/components/ContactLinkBox/ContactLinkBox";
import Image from "next/image";
import VideoList from "@/components/VideoList/VideoList";
import VideoContainer from "@/components/VideoContainer/VideoContainer";
import { useSelector } from "react-redux";
import React from "react";
import Notification from "@/components/Notification/Notification";
import { announcements, recording, schedule } from "../../utils/data";
import react from "react";


const Home = () => {
  const toggle = useSelector(store => store.video.isOpen);
  const notificationToggle = useSelector(store => store.notification.isOpen);
  const annoucementData = announcements;
  const schedulesData = schedule;
  const videoData = recording;

  return (
    <>
      {notificationToggle && <Notification />}
      <div className={`${styles.container} ${toggle ? styles.active : ""} ${notificationToggle ? styles.shadow : ""}`}>
        {toggle ? <VideoContainer /> :
          (<>
            <div className={styles.left}>
              <div className={styles.box1}>
                <h1 className={styles.title}>Announcements</h1>
                <div className={styles.subContainer}>
                  {
                    annoucementData.map((data, i) => {
                      return <AnnouncementBox data={data} key={i} />
                    })
                  }
                </div>
              </div>
              <div className={styles.box2}>
                <h1 className={styles.title}>Your Class Schedule</h1>
                <div className={styles.subContainer}>
                  {
                    schedulesData.map((data, i) => {
                      return <ClassSchedule data={data} key={i} />
                    })
                  }
                </div>
              </div>
            </div>
            <div className={styles.middle}>
              <h1 className={styles.title}>Quick Links</h1>
              <div className={styles.linkBoxContainer}>
                <LMSLinksBox />
                <LiveClassLinkBox />
                <ContactLinkBox />
              </div>
            </div>
            <div className={styles.right}>
              <h1 className={styles.title}>Access Class Recordings</h1>
              <div className={styles.videoBoxContainer}>
                <div className={styles.inputBoxContainer}>
                  <div className={styles.imageSearchContainer}>
                    <Image src="/search-normal.png" fill />
                  </div>
                  <input type="text" className={styles.inputBox} placeholder="Search for class recordings" />
                </div>
                <div className={styles.rightFilter}>
                  <p className={styles.filterText}>Filter By:</p>
                  <div className={styles.optionsBox}>
                    <select className={styles.selectBox}>
                      <option value="This week">This week</option>
                      <option value="Next week">Next week</option>
                    </select>
                    <select className={styles.selectBox}>
                      <option value="All Subjects">All Subjects</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Mathematics">Mathematics</option>
                    </select>
                  </div>
                </div>
                <div className={styles.videoList}>
                  {
                    videoData.map((data, i) => {
                      return (<div key={i}>
                        <VideoList data={data}  />
                        <hr className={styles.hrtag} />
                      </div>)

                    })
                  }
                </div>
              </div>
            </div>
          </>
          )}
      </div>
    </>

  );
};

export default Home;