import React from "react";
import styles from "./button.module.css";

const Full = ({text, children, bgColor}:{text:string; children?:any; bgColor?: string}) => {
  return <button className={"w-full rounded-md block p-2 "+bgColor} >{children} {text}</button>;;
};

export default {Full} as const;
