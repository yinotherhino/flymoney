import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./mainLeft.module.css";
import {CiMenuKebab} from "react-icons/ci";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { IoIosSwap } from "react-icons/io";
import { BsBoxArrowDown } from "react-icons/bs";
import { tableData } from "@/data";
import { AiFillEye, AiFillEyeInvisible, AiOutlinePlus } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import SmallCard from "./SmallCard";
import Table from "../tables/Table";

const MainLeft = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState<{ [key: string]: string }>({
    usd: "$2000.00",
    gbp: "£3042.61",
    eur: "€2000.00",
    ngn: "N2000.00",
  });
  const arrowStyle = " flex items-center justify-center";
  const dotStyle = " text-[25px] text-white mr-1 cursor pointer";
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
      <div className={styles["four-cards-div"]}>
        <SmallCard Icon={TbSend} text="Send funds" />
        <SmallCard Icon={AiOutlinePlus} text="Add funds" />
        <SmallCard Icon={IoIosSwap} text="Swap funds" />
        <SmallCard Icon={BsBoxArrowDown} text="Withdraw funds" />
      </div>
      <div>
        <p>Recent Transactions</p>
        <Table.Ratioed
          thead={["Date", "Amount", "Name", "Type", ""]}
          theadRatio={[30, 20, 30, 15, 5]}
          tdata={tableData.map((item, index)=>{
            const newItem = [...item, <CiMenuKebab key={index} />]
            return newItem
          })}
          theadStyle="font-sm font-lato"
        />
      </div>
    </div>
  );
};

export default MainLeft;
