import React, { useState } from "react";
import styles from "./sidebar.module.css";
import Text from "@/components/texts/Text";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiGift } from "react-icons/ci";
import Bar from "@/components/bars/Bar";
import Button from "../buttons/Button";

const Sidebar = () => {
  const [progressMoneyIn, setProgressMoneyIn] = useState("50%");
  const [progressMoneyOut, setProgressMoneyOut] = useState("20%");

  return (
    <aside className={styles["main-right"] + " flex flex-col justify-between"}>
      <div>
        <div className="mb-2">
          <Text.inlinePara text="GBP" />{" "}
          <Text.Small text="Great British Pound" />
        </div>
        <div className="flex justify-between">
          <Text.inlinePara text="ACCOUNT OVERVIEW" className="text-md" />
          <div>
            <Text.Small text="Last 30 days" />
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="mb-2">
          <Text.Small text="Money in" />
          <div className=" flex ">
            <Bar.Progress width={progressMoneyIn} color="#5DB1A2" />
            <Text.Small text="£5,724.61" className="ml-2" />
          </div>
        </div>
        <div>
          <Text.Small text="Money out" />
          <div className=" flex ">
            <Bar.Progress width={progressMoneyOut} color="#3B0284" />
            <Text.Small text="£3,724.61" className="ml-2" />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 rounded-md p-3 text-center">
        <p className="text-sm">Get rewarded when you invite a friend to sign up for our service!</p>
        <CiGift className="text-darkPurple my-3 text-9xl mx-auto" />
        <Button.Full text=" " bgColor="bg-white">
          <Text.Small
            text="Join the referral program"
            className="text-darkPurple"
          />
        </Button.Full>
      </div>
    </aside>
  );
};

export default Sidebar;
