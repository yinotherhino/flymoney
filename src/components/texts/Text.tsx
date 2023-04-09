import React from "react";

const PSpanGrp = ({ pText, spanText }: { pText: string; spanText: string }) => {
  return (
    <>
      <p className=" mb-0 font-semibold ">{pText}</p>
      <span className=" text-[10px]">{spanText}</span>
    </>
  );
};

export default {
  PSpanGrp,
} as const;
