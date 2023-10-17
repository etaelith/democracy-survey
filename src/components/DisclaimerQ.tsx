import React from "react";

const DisclaimerQ = ({ description }: { description: string | null }) => {
  if (typeof description === null) return;
  return <h4 className="text-xs px-4">{description}</h4>;
};

export default DisclaimerQ;
