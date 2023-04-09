import React from "react";

const Simple = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <div
      className={"bg-white rounded-lg border-[1px solid #dfdfdf] p-2 " + className}>
      {children}
    </div>
  );
};

export default { Simple } as const;
