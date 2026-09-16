import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="mx-auto flex w-full max-w-[800px] flex-col items-center px-6 py-10 md:flex-row md:px-10 md:py-20">
      <h2 className="mb-4 text-xl font-bold md:mb-0">basoarfan.</h2>
      <nav aria-label="Main navigation" className="flex items-center gap-6 md:ml-auto">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/projects">Projects</Link>
        <Link className="hover:underline" to="/about">About</Link>
        <button
          type="button"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/10 dark:hover:bg-white/10"
        >
          <img src={theme === "dark" ? sunIcon : moonIcon} alt="" className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
