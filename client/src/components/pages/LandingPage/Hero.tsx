import { ArrowDown, ArrowDownToDot, MoveDown, SquareArrowOutDownRight } from "lucide-react";
import styles from "../../styles/landingpage.module.scss";
import DraggableComponent from "./DragAndDrop";
import { motion } from "framer-motion";
import { useRef } from "react";

function handleLinkClick(url:string) { window.open(url, "_blank")};

export default function Hero() {

    const handleScrollDown = () => {
        window.scrollTo({
            top: 750,
            behavior: "smooth"
        })
    }

    return(
        <section className={styles["section-1"]}>
            <div className={styles["main-text"]}>
                <h1>A website about Myers–Briggs Type Indicator, Socionics and how cognitive functions works</h1>
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
                        <div className={styles["myers-container"]} 
                             onClick={() => handleLinkClick("https://www.myersbriggs.org/")}>
                            <h4>Myers&Briggs® Foundation</h4>
                            <label  className={styles["lik-mbtitest"]}>
                                <SquareArrowOutDownRight size={20}/>
                            </label>
                        </div>
                        <div className={styles["personalities-container"]}
                             onClick={() => handleLinkClick("http://wikisocion.net/")}>
                            <h4>Wikisocion.net</h4>
                            <label className={styles["lik-mbtitest"]}>
                                <SquareArrowOutDownRight size={20}/>
                            </label>
                        </div>
                    </div>
                    <div className={styles["scrolldown-container"]} onClick={()=>handleScrollDown()}>
                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevrons-down">
                                <motion.path d="m7 6 5 5 5-5"
                                    initial={{
                                        y: 0,
                                        strokeOpacity: 1
                                    }}
                                    animate={{
                                        y: 2,
                                        strokeOpacity: 0.4,
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <motion.path d="m7 13 5 5 5-5"
                                    initial={{
                                        y: 0,
                                        strokeOpacity: 1
                                    }}
                                    animate={{
                                        y: 2,
                                        strokeOpacity: 0.8,
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}