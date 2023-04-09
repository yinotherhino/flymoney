import React from "react";

const Small = ({text,className}:{text:string; className?:string}) => {
    return <span className={className + " text-[10px]"}>{text}</span>
}

const PSpanGrp = ({ pText, spanText, className }: { pText: string; spanText: string; className?:string }) => {
  return (
    <>
      <p className=" mb-0 font-semibold ">{pText}</p>
      <Small text={spanText} />
    </>
  );
};

const inlinePara = ({ text, className }: { text: string; className?:string  }) => {
  return <p className={className + " inline-block text-[15px]"}>{text}</p>;
};

export default {
  PSpanGrp,
  inlinePara,
  Small
} as const;
