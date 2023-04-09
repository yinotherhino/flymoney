import React from "react";
import { TbSend } from "react-icons/tb";
import Card from "@/components/cards/Card";
import Shapes from "../shapes/Shapes";
import Text from "@/components/texts/Text";
import { IconType } from "react-icons";

const SmallCard = ({ Icon, text }: { Icon: IconType; text: string }) => {
  const smallDivStyle =
    " flex flex-col justify-between items-center cursor-pointer ";
  const circleIconStyle = "text-darkPurple";

  return (
    <Card.Simple className={smallDivStyle}>
      <>
        <Shapes.Circle size="50px" color="slate-300 z">
          <Icon className={circleIconStyle} />
        </Shapes.Circle>
        <Text.Small text={text} />
      </>
    </Card.Simple>
  );
};

export default SmallCard;
