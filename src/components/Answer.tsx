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
    <div className="flex flex-col pl-4 gap-4 justify-between">
      <div>
        <input
          type="radio"
          value={1}
          checked={value === 1}
          onChange={handleChange}
        />
        <label>{options.full}</label>
      </div>
      <label>
        <input
          type="radio"
          value={0.5}
          checked={value === 0.5}
          onChange={handleChange}
        />
        {options.medium}
      </label>
      <label>
        <input
          type="radio"
          value={0}
          checked={value === 0}
          onChange={handleChange}
        />
        {options.short}
      </label>
    </div>
  );
};

export default Answer;
