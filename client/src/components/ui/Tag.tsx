import classNames from "classnames"
import styles from "../styles/tag-small.module.scss"

interface TagI {
    size: "small" | "medium" | "large",
    text: string,
    outline: boolean,
    shape: "square" | "round",
}

export default function Tag ({ size, text, outline, shape }:TagI) {
    
    return(
        <div className={classNames(
            styles["container"],
            styles[size],
            styles[shape],
            outline && styles["outline"]
        )}>
            <p className={styles["text"]}>{text}</p>
        </div>
    )
}
