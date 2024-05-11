"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="text-2xl cursor-pointer hover:text-amber-500">
      {mounted &&
        (currentTheme === "dark" ? (
          <CiLight onClick={() => setTheme("light")} />
        ) : (
          <CiDark onClick={() => setTheme("dark")} />
        ))}
    </div>
  );
}

export default DarkModeSwitch;
