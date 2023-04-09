import React from "react";
import { VscBellDot } from "react-icons/vsc";
import styles from "./icons.module.css";


const Notification = () => {
  return (  
    <span>
      <VscBellDot className={styles['notification']} />
    </span>
  );
};

export default { Notification } as const;
