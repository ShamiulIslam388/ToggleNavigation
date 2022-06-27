import React, { useState } from "react";

export default function NavItem({ items }) {
  const [activeTitle, setActiveTitle] = useState("aaa");
  return (
    <>
      {items.map((item) => (
        <div
          onClick={() => setActiveTitle(item)}
          className={`w-fit text-center h-full px-8 py-3 flex items-center cursor-pointer justify-center rounded-full ${
            activeTitle === item ? "bg-red-500" : null
          }`}
          key={item}
        >
          {item}
        </div>
      ))}
    </>
  );
}
