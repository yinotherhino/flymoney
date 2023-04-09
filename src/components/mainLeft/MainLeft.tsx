import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./mainLeft.module.css";
import Text from "@/components/texts/Text";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const MainLeft = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState<{ [key: string]: string }>({
    usd: "$2000.00",
    gbp: "£3042.61",
    eur: "€2000.00",
    ngn: "N2000.00",
  });
  const arrowStyle = " flex items-center justify-center";
  const dotStyle = " text-[25px] text-white mr-1";
  const eyeStyle = " text-[15px] text-white ml-1 cursor-pointer";

  const handleShowBalance = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setShowBalance(!showBalance);
  };
  return (
    <div className={styles["main-left"]}>
      <div
        className={
          styles["top"] + " rounded-md border-[1px solid #dfdfdf] bg-white "
        }>
        <div className={arrowStyle}>
          <IoIosArrowBack className={"text-darkPurple text-sm"} />
        </div>
        <div className="bg-darkPurple px-10 py-5 text-white shadow-2sm text-center">
          <p className="text-[10px] relative">
            GBP
            <span className=" absolute right-0">
              {showBalance ? (
                <AiFillEyeInvisible
                  onClick={handleShowBalance}
                  className={eyeStyle}
                />
              ) : (
                <AiFillEye onClick={handleShowBalance} className={eyeStyle} />
              )}
            </span>
          </p>
          <p>{showBalance ? balance.gbp : "****"}</p>
          <p>
            <RxDot className={dotStyle} /> <RxDotFilled className={dotStyle} />{" "}
            <RxDot className={dotStyle} />
          </p>
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
