import classNames from "classnames"
import styles from "../styles/navbar.module.scss"

export default function Navbar () {
    return (
        <nav className={styles["navbar-container"]}>
            <div className={styles["navbar"]}>
                <div className={styles["navbar-brand"]}>
                    <img src="/logo-32.png" alt="logo" />
                    <h1>Persona</h1>
                </div>
                <ul className={styles["navbar-list"]}>
                    <li className={styles["nav-item"]}>
                        <a href="#" className={styles["nav-link"]}>
                            16 Personalities
                        </a>
                    </li>
                    <li>
                        <a href="#">Cognitive Functions</a>
                    </li>
                    <li>
                        <a href="#">Take Test</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}