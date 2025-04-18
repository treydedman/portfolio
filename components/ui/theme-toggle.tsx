"use client";

import { Button } from "./button";
import { useTheme } from "next-themes";
import {FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <Button
        variant="ghost"
        size="icon"
        className="relative rounded-full w-6 h-6 cursor-pointer hover:scale-150"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <FaSun className="absolute h-10 w-10 transition-all duration-300 ease-in-out opacity-0 scale-0 dark:opacity-100 dark:scale-100"></FaSun>
            <FaMoon className="absolute h-10 w-10 transition-all duration-300 ease-in-out opacity-100 scale-100 dark:opacity-0 dark:scale-0"></FaMoon>
        </Button>
    )
}