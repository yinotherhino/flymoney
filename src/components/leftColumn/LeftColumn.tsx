import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { SiEsphome } from "react-icons/si";
import { BsJournalBookmark, BsChatLeft } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import styles from "./leftColumn.module.css";

const LeftColumn = () => {
  return (
    <nav className={styles["left-column"]}>
        <h1>Flymoney</h1>
        <section>
          <h3>MAIN MENU</h3>
          <ul>
            <li className={styles["active-list"]}>
              <GrHomeRounded /> Home
            </li>
            <li>
              <SiEsphome /> Bank accounts
            </li>
            <li>
              <BsJournalBookmark /> Account statement
            </li>
          </ul>
        </section>
        <section>
          <h3>PREFERENCES</h3>
          <ul>
            <li>
              <FiSettings /> Settings
            </li>
            <li>
              <BsChatLeft /> Support
            </li>
            <li>
              <MdLogout /> Logout
            </li>
          </ul>
        </section>
      </nav>
  )
}

export default LeftColumn