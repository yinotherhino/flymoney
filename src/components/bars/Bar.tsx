import React from "react";
import styles from "./progressBar.module.css";

const Progress = ({ width, color }: { width: string; color: string }) => {
  const style = {
    width,
    backgroundColor: color,
  };

  return (
    <div className="w-full h-3 border-none rounded-r-md bg-lightGrey">
      <div className="h-full border-none  rounded-r-md" style={style}> </div>
    </div>
  );
};

export default { Progress } as const;
