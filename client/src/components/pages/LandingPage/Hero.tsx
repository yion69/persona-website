import { ArrowUpFromDot } from "lucide-react";
import styles from "../../styles/landingpage.module.scss";
import DraggableComponent from "./DragAndDrop";
import { motion } from "framer-motion";
import logo from "../../../assets/misc/16-personalities-logo.svg"

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
                <h1>A website about Myers–Briggs Type Indicator and how cognitive functions works</h1>
                <div className={styles["link-container"]}>
                    <a  href="https://www.16personalities.com/free-personality-test"
                        target="_blank" 
                        rel="noopener" 
                        className={styles["link-read"]} >Read More</a>
                </div>
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
                        <div className={styles["personalities-container"]}>
                            <img src={logo} alt="" />
                            <p>a personality framework and test that categorizes people into 16 distinct personality types</p>
                        </div>
                        <div className={styles["myers-container"]}>
                            <h4>Myers&Briggs® Foundation</h4>
                            <p>
                                a nonprofit organization that promotes the ethical and accurate use of the Myers-Briggs Type Indicator (MBTI) assessment: 
                            </p>
                        </div>
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