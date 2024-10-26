import { useLocation } from "react-router-dom";
import styles from "../../styles/mbtiinfo.module.scss";
import FunctionSection from "./FunctionsSection";
import IntroSection from "./IntroSection";
import { function_intj } from "../../../mockdata/data_cognitive";
import { intj_characters } from "../../../mockdata/data_characters";
import ThemeButton from "./ThemeButton";
import { useState } from "react";
import { ThemeContext } from "../../hooks/themecontext";
import classNames from "classnames";

type mbtiTypeT = {
    type: string,
    name: string,
    image: string,
    description: string,
}

export default function MbtiInfo () {
    const location = useLocation();
    const mbtiType = location.state.mbti as mbtiTypeT;
    const [theme,setTheme] = useState("theme-dark");
    

    return( 
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={
                classNames(
                    styles["root-container"],
                    styles[theme]
                )
            }>
                <ThemeButton />
                <IntroSection mbti_type={mbtiType.type} />
                <FunctionSection 
                    mbti_text={function_intj.function_text} 
                    mbti_stack={function_intj.function_data} 
                    mbti_characters={intj_characters} />
            </div>
        </ThemeContext.Provider>
    )
}

//https://mbti-notes.tumblr.com/masterposts