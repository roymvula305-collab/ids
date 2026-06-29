import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle Theme"
      type="button"
    >
      <div className="theme-icon-wrapper">
        <FiSun className={`theme-icon sun-icon ${theme === "light" ? "active" : "inactive"}`} />
        <FiMoon className={`theme-icon moon-icon ${theme === "dark" ? "active" : "inactive"}`} />
      </div>
    </button>
  );
}
