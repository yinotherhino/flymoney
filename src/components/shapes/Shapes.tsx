import React from "react";

const Circle = ({
  children,
  size,
  color,
}: {
  children: JSX.Element;
  size: string;
  color?: string;
}) => {
  return (
    <div
      style={{
        width: size,
        height: size
      }}
      className={"bg-gray-300 rounded-full flex justify-center items-center"}>
      {children}
    </div>
  );
};

export default { Circle } as const;
