import React, { useState } from "react";

export default function NavItem({ navs }) {
  const [activeNav, setActiveNav] = useState("Fast Pack");
  return (
    <>
      {navs.map((nav) => (
        <div
          onClick={() => setActiveNav(nav)}
          className={`w-fit text-center h-full px-8 py-3 flex items-center cursor-pointer justify-center rounded-full whitespace-nowrap ${
            activeNav === nav ? "bg-red-500" : null
          }`}
          key={nav}
        >
          {nav}
        </div>
      ))}
    </>
  );
}
