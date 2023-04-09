import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./mainLeft.module.css";
import Text from "@/components/texts/Text";

const MainLeft = () => {
  const arrowStyle = " flex items-center justify-center";
  return (
    <div className={styles["main-left"]}>
      <div
        className={
          styles["top"] + " rounded-md border-[1px solid #dfdfdf] bg-white "
        }>
        <div className={arrowStyle}>
          <IoIosArrowBack className={"text-darkPurple text-sm"} />
        </div>
        <div>
          <Text.Small text="GBP" />
          #3065.62
        </div>
        <div className={arrowStyle}>
          <IoIosArrowForward className={"text-darkPurple text-sm"} />
        </div>
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default MainLeft;
