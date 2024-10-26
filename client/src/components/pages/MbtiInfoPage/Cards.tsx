import styles from "../../styles/mbtiinfo.module.scss";

export default function TriviaCard () {
    return(
        <div className={styles["trivia-card-container"]}>
            <h4>Trivia</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sequi temporibus porro, quos sed maiores expedita earum fugiat officia fuga, ducimus maxime sint fugit magnam.</p>
        </div>
    )
}

export function ReferenceCard () {
    return(
        <a className={styles["reference-card-container"]}
             href="https://www.16personalities.com" 
             target="_blank" rel="noopener">

            <h4>More Information?</h4>
            <p>Check out the<span> 16Personalities.com </span>for more on this topic
            </p>
        </a>
    )
}