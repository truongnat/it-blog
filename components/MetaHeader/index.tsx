import React from "react";

type MetaHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function MetaHeader({
  title,
  description,
  children,
}: MetaHeaderProps) {
  return (
    <div className="pb-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>{description}</p>
      {children}
      <div className="h-[1px] w-full border-t-[1px]"></div>
    </div>
  );
}
