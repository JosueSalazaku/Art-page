import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [toggled, setToggled] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (toggled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [toggled]);

  const handleClick = () => {
    console.log("Dark mode button clicked");
    setToggled((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-black bg-gray-200 rounded dark:bg-gray-800 dark:text-white"
    >
      {toggled ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
