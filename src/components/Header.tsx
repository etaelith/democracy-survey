import React from "react";

const Header = ({ header }: { header: string }) => {
  return <h1 className="text-xl my-4">{header}</h1>;
};

export default Header;
