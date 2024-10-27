import { ArrowUpFromDot } from "lucide-react";
import styles from "../../styles/landingpage.module.scss";
import DraggableComponent from "./DragAndDrop";
import { motion } from "framer-motion";

interface LinkComponentI { text:string, url: string }

function LinkComponent({ text, url }: LinkComponentI) {
    return(
        <a href={url} className={styles["link-component"]}>
            <span>{text}</span>
        </a>
    )
}

export default function Hero() {
    return(
        <section className={styles["section-1"]}>
            <div className={styles["main-text"]}>

            </div>
            <div className={styles["medium-text"]}>
                <div className={styles["container"]}>
                    <DraggableComponent />
                </div>
            </div>
            <div className={styles["small-text-container"]}>
                <div className={styles["small-text"]}>
                    <h3>16 Personalities Website</h3>
                    <p>Take a free test to figure out your personality in the most accurate way.</p>
                    <a className={styles["lik-mbtitest"]}
                        href="https://www.16personalities.com/free-personality-test"
                        target="_blank" rel="noopener">Take Test</a>
                    <span></span>
                </div>
                <div className={styles["micro-container"]}>
                    <div className={styles["external-container"]}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles["scrolldown-container"]}>
                        <p>Scroll Down</p>
                        <motion.label whileHover={{scale: 1.1,rotate: 180, transition: {duration: 0.1, ease: "linear"}}}>
                            <ArrowUpFromDot />
                        </motion.label>
                    </div>
                </div>
            </div>
        </section>
    )
}