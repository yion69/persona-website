import styles from "../styles/footer.module.scss"

export default function Footer () {
    return(
        <div className={styles["footer-container"]}>
            <div className={styles["footer"]}>
                <div className={styles["container"]}>
                    <h4>Persona</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam.</p>
                    <div className={styles["list-container"]}>
                        <ul className={styles["list-one"]}>
                            <li><a href="#">Socionics</a></li>
                            <li><a href="#">16 Personalities</a></li>
                            <li><a href="#">Cognitive Functions</a></li>
                            <li><a href="#">Enneagram System</a></li>
                        </ul>
                        <ul className={styles["list-two"]}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About the website</a></li>
                            <li><a href="#">Contact Information</a></li>
                            <li><a href="#">References</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}