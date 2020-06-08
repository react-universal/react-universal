import React from "react"
import useDarkMode from "use-dark-mode"
import { FaMoon, FaSun } from "react-icons/fa"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div>
      <button
        type="button"
        onClick={darkMode.toggle}
        className="DarkModeToggleButton"
      >
        {darkMode.value ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  )
}

export default DarkModeToggle
