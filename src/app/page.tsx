import Image from "next/image";
import { Lato } from "next/font/google";
import styles from "./page.module.css";
import {GrHomeRounded} from "react-icons/gr";
import {SiEsphome} from "react-icons/si";
import {BsJournalBookmark} from "react-icons/bs";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={lato.className + " parent"}>
      <div className={styles["left-column"]}>
        <h1>Flymoney</h1>
        <div>
          <h3>MAIN MENU</h3>
          <ul>
            <li><GrHomeRounded /> Home</li>
            <li><SiEsphome /> Bank accounts</li>
            <li><BsJournalBookmark/> Account statement</li>
          </ul>
        </div>
        <div>
          <h3>PREFERENCES</h3>
          <ul>
            <li>Settings</li>
            <li>Support</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>hi</h1>
      </div>
      <div>
        <h1>hi</h1>
      </div>
    </div>
  );
}
