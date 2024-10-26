import { useContext} from "react";
import styles from "../../styles/mbtiinfo.module.scss";
import { BookOpenText, Moon, Sun } from "lucide-react";
import { ThemeContext } from "../../hooks/themecontext";
import { THEME_TYPES } from "../../../types/enums";

export default function ThemeButton () {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = (event:React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.value) {
 
            case "light":
                setTheme(THEME_TYPES.LIGHT);
                break;

            case "dark":
                setTheme(THEME_TYPES.DARK);
                break;
            
            case "warm":
                setTheme(THEME_TYPES.WARM);
                break;

            default:
                setTheme(THEME_TYPES.LIGHT);
                break;
        }
        console.log(theme);
    }

    return(
        <section className={styles["theme-button-container"]}>
            
            <span>
                <input type="radio" value="light" id="theme-button-light" name="theme" 
                    className={styles["theme-button"]} onChange={toggleTheme}/>
                
                <label htmlFor="theme-button-light"><Sun /></label>
            </span>
            
            <span>
                <input type="radio" value="dark" id="theme-button-dark" name="theme" 
                    className={styles["theme-button"]} onChange={toggleTheme}/>
                    <label htmlFor="theme-button-dark"><Moon /></label>
            </span>
            <span>
                <input type="radio" value="warm" id="theme-button-warm" name="theme" 
                    className={styles["theme-button"]} onChange={toggleTheme}/>
                    <label htmlFor="theme-button-warm"><BookOpenText /></label>
            </span>
        </section>
    )
}