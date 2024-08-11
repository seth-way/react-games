import { useState } from "react";

export default function DarkModeToggle() {
  const [darkmode, switchMode] = useState("dark");
  function handleChange() {
    const newMode = darkmode === "dark" ? "light" : "dark";
    const styleUpdates = {
      "--bg_C": `var(--bg-${newMode}1)`,
      "--bg-2_C": `var(--bg-${newMode}2)`,
      "--text_C": `var(--text-${newMode})`,
      "--text-2_C": `var(--text-${newMode}-alt)`,
      "--primary_C": `var(--primary-${newMode})`,
      "--secondary_C": `var(--secondary-${newMode})`,
      "--accent_C": `var(--accent-${newMode})`,
    };

    Object.entries(styleUpdates).forEach(([prop, val]) => {
      document.body.style.setProperty(prop, val);
    });

    switchMode(newMode);
  }
  return (
    <label id="darkmode-toggle" className="switch">
      <input
        type="checkbox"
        onChange={handleChange}
        checked={darkmode === "dark"}
      ></input>
      <span className="slider">
        <svg
          id="sun"
          className="darkmode-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <line
            x1="12"
            y1="1"
            x2="12"
            y2="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="20"
            x2="12"
            y2="23"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="4.22"
            y1="4.22"
            x2="6.34"
            y2="6.34"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="17.66"
            y1="17.66"
            x2="19.78"
            y2="19.78"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="1"
            y1="12"
            x2="4"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="12"
            x2="23"
            y2="12"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="4.22"
            y1="19.78"
            x2="6.34"
            y2="17.66"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="17.66"
            y1="6.34"
            x2="19.78"
            y2="4.22"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <svg
          id="moon"
          className="darkmode-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 12.79C20.36 12.93 19.68 13 19 13C14.58 13 11 9.42 11 5C11 4.32 11.07 3.64 11.21 3C7.61 3.64 5 7.08 5 11C5 15.42 8.58 19 13 19C16.92 19 20.36 16.39 21 12.79Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </label>
  );
}
