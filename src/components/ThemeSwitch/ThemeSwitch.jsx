import { useTheme } from "../../hooks/useTheme";
import { Moon } from "./Moon";
import { Sun } from "./Sun";
import "./ThemeSwitch.css";

const ThemeSwitch = () => {

  const { theme, toogleTheme } = useTheme();

  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" onChange={toogleTheme} checked={ theme === 'Dark'} />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun/>
        <Moon/>
      </label>
    </div>
  );
};

export default ThemeSwitch;
