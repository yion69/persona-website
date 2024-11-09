import { AlignJustify, CircleX, Facebook, Github, Linkedin, Mail, Plus } from "lucide-react"
import styles from "../styles/navbar.module.scss"
import classNames from "classnames";
import { useState } from "react";

interface SidebarI { toggle: boolean, toggleSidebar: () => void };

function Sidebar ({toggle, toggleSidebar}:SidebarI) {
    return(
        <div className={classNames(
            styles["sidebar-container"],
            toggle ? styles["sidebar-active"] : styles["sidebar-inactive"]
        )}>
            <div className={styles["header-container"]} onClick={toggleSidebar}>
                <div className={styles["text-container"]}>
                    <h5>Persona</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <button title="togglebtn" type="button"><CircleX strokeWidth={1} size={35} /></button>
            </div>
            <div className={styles["main-container"]}>
                <ul className={styles["list"]}>
                    {[...Array(5)].map((_,i) => (
                        <li className={styles["list-item"]} key={i}>
                            <a href="#">16 Personalities <Plus /> </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles["footer-container"]}>
                <ul>
                    <li><a href="#" title="link"><Github/></a></li>
                    <li><a href="#" title="link"><Facebook/></a></li>
                    <li><a href="#" title="link"><Linkedin/></a></li>
                    <li><a href="#" title="link"><Mail/></a></li>
                </ul>
                <p>&copy; 2024 [Yion]. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default function Navbar () {
    

    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(prev => prev = !prev);
    }

    return (
        <nav className={styles["navbar-container"]}>
            <div className={styles["navbar"]}>
                <div className={styles["navbar-brand"]}>
                    <img src="/logo-32.png" alt="logo" />
                    <h1>Persona</h1>
                </div>

                <ul className={styles["navbar-list"]}>
                    <li className={styles["nav-item"]}>
                        <a href="#">
                            16 Personalities
                        </a>
                    </li>
                    <li>
                        <a href="#">Cognitive Functions</a>
                    </li>
                    <li>
                        <a href="#">Socionics</a>
                    </li>
                    <li>
                        <a href="#">Take Test</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>

                <button
                    title="toggle-btn"
                    type="button" 
                    className={styles["toggle-btn"]}
                    onClick={()=>toggleSidebar()}
                >
                        <AlignJustify />
                </button>
                <Sidebar toggle={sidebar} toggleSidebar={toggleSidebar}/>
            </div>
        </nav>
    )
}