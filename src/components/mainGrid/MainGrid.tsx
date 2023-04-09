import React, { useState } from "react";
import styles from "./mainGrid.module.css";
import Text from "@/components/texts/Text";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";
import Icon from "../icons/Icon";
import Sidebar from "../sidebar/Sidebar";

const MainGrid = () => {
  const [fullName, setFullName] = useState({
    firstName: "Ebenezer",
    lastName: "Omosuli",
  });
  return (
    <main className={styles["main-grid"] + " "}>
      <div className={styles["top-left"]}>
        <Text.PSpanGrp
          pText={`Hello, ${fullName.firstName}`}
          spanText="Welcome back"
        />
      </div>
      <div
        className={
          styles["top-right"] + " text-md flex items-start justify-between"
        }>
        <div className="inline-block">
          <Icon.Notification />
        </div>
        <div className=" inline-block float-right ">
          <MdPersonOutline className="mr-2" />{" "}
          <span>{`${fullName.firstName} ${fullName.lastName}`}</span>{" "}
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className={styles["main-left"]}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <Sidebar />
    </main>
  );
};

export default MainGrid;
