"use client";
import React, { useState } from "react";

const Answer = ({
  options,
}: {
  options: { full: string; medium: string; short: string };
}) => {
  const [value, setValue] = useState<Number>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  return (
    <div className="flex flex-col px-4 h-full gap-4 justify-evenly">
      <label className="flex text-lg">
        <input
          type="radio"
          value={1}
          checked={value === 1}
          onChange={handleChange}
          className="mr-2"
        />
        {options.full}
      </label>
      <label className="flex text-lg">
        <input
          type="radio"
          value={0.5}
          checked={value === 0.5}
          onChange={handleChange}
          className="mr-2"
        />
        {options.medium}
      </label>
      <label className="flex text-lg">
        <input
          type="radio"
          value={0}
          checked={value === 0}
          onChange={handleChange}
          className="mr-2"
        />
        {options.short}
      </label>
    </div>
  );
};

export default Answer;
