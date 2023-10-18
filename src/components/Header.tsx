import React from "react";

const Header = ({ header }: { header: string }) => {
  return (
    <h1 className="text-xl py-4 text-center border-b-2 w-full">{header}</h1>
  );
};

export default Header;
