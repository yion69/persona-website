import styles from "../../styles/mbtipage.module.scss";
import { MbtiCard, cardT } from "./MbtiCard";

type AnalystT = {
  intj: cardT;
  intp: cardT;
  entj: cardT;
  entp: cardT;
};

type DiplomatsT = {
  infj: cardT;
  infp: cardT;
  enfj: cardT;
  enfp: cardT;
};

type SentinelsT = {
    istj: cardT;
    isfj: cardT;
    estj: cardT;
    esfj: cardT;
};

type ExplorersT = {
    istp: cardT;
    isfp: cardT;
    estp: cardT;
    esfp: cardT;
};

type propsT = {
    row_name: string,
    row_data: AnalystT | DiplomatsT | SentinelsT | ExplorersT
}

export default function MbtiRow ({ row_name, row_data }:propsT) {
    return(
        <div className={styles["mbtirow-container"]}>
 
            <div className={styles["container-background"]}>
                <h3>{row_name}</h3>
            </div>

            <div className={styles["container-main"]}>
                {Object.entries(row_data).map(([_,e],i) => (
                    <MbtiCard
                        key={i}
                        mbti_image={e.mbti_image}
                        mbti_name={e.mbti_name}
                        mbti_type={e.mbti_type}
                        mbti_description={e.mbti_description} />
                ))}       
            </div>
        </div>
    )
}