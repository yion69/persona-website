import classNames from "classnames";
import styles from "../../styles/maintwo.module.scss";
import Tag from "../../ui/Tag";
import JungImg from "../../../assets/misc/ETH-BIB-Jung,_Carl_Gustav_(1875-1961)-Portrait-Portr_14163_(cropped).jpg"
import List from "../../ui/List";
import { text } from "framer-motion/client";

export default function MainTwo () {

    const carljungdata = ["INFJ", "5w4", "LII"]

    return (
        <div className={styles["container"]}>
            <div className={classNames(
                styles["field"],
                styles["field-one"]
            )}>
                <div className={styles["jung-card-container"]}>
                    <div className={styles["image-container"]}>
                        <img src={JungImg} alt="Carl Jung" />
                    </div>
                    <div className={styles["tag-container"]}>
                        {carljungdata.map((e,i) => (
                            <Tag 
                                key={i}
                                size="small"
                                text={e}
                                outline
                                shape="square"
                            />
                        ))}
                    </div>
                    <div className={styles["text-container"]}>
                        <h4>Carl Gustav Jung</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iure earum atque excepturi vel beatae. Corporis exercitationem maxime excepturi nisi.</p>
                    </div>
                </div>
                <div className={styles["list-container"]}>
                    <List item={[
                        ["Analysts", "#"],["Diplomats", "#"],["Sentinels","#"],["Entertainer", "#"]
                    ]} />
                </div>
            </div>
            <div className={classNames(
                styles["field"],
                styles["field-two"],
            )}>
                <div className={styles["socionic-container"]}>
                    <div className={styles["text-container"]}>
                    </div>
                    <div className={styles["image-container"]}>
                        <img src="#" alt="" />
                    </div>
                </div>
                <div className={styles["text-container"]}>
                    <p className={styles["text"]}>
                        “The understanding of type can make your  perceptions clearer, your judgements sounder, and your life closer to  your heart's desire.”
                    </p>
                    <p className={styles["author"]}>Isabel Briggs Myers</p>
                </div>
                <div className={styles["enneagram-container"]}>
                    <div className={styles["image-container"]}>
                        <img src="#" alt="" />
                    </div>
                    <div className={styles["text-container"]}></div>
                </div>
            </div>
            <div className={classNames(
                styles["field"],
                styles["field-three"],
            )}>
                <div className={styles["card-container"]}>

                </div>
            </div>
        </div>
    )
}