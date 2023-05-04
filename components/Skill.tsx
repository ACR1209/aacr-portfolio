import React from "react";

function Skill({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full md:w-1/3 p-5 md:p-8">
      <div className="font-bold text-4xl">
        <p>0{index}</p>
        <h3>{title}</h3>
      </div>
      <p className="text-lg xl:text-xl text-justify mt-3">{description}</p>
    </div>
  );
}

export default Skill;
