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
    <div>
      <h1 className="text-5xl font-bold capitalize">{title}</h1>
      <p>{description}</p>
      {children}
      <div className="divider"></div>
    </div>
  );
}
