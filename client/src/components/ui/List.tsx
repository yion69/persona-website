import { MoveUpRight } from "lucide-react"
import styles from "../styles/list.module.scss"

interface ListI { item: [text:string, url:string][]};

export default function List ({ item }:ListI) {
    return(
        <div className={styles["container"]}>
            <ul className={styles["list"]}>
                {item.map((e,i) => (
                    <li key={i} className={styles["list-item"]}>
                        <a href={e[1]} className={styles["list-link"]}>{e[0]} <MoveUpRight className={styles["icon"]} /> </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
