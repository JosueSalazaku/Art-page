import React, { useEffect, useState } from "react";

export default function Darkmode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  const handleClick = () => {
    console.log("Dark mode button clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-black bg-gray-200 rounded dark:bg-gray-800 dark:text-white"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}