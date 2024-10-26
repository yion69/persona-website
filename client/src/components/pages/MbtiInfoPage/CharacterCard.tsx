import styles from "../../styles/mbtiinfo.module.scss";
import { MbtiCharactersT, MbtiCharacterT } from "../../../types/MbtiTypes";

function CardComponent ({ card_data }: { card_data:MbtiCharacterT }) {
    return(
        <div className={styles["character-card"]}>
            <img src={card_data.character_photo } title="person"/>
            <div className={styles["character-card-main"]}>
                <h4>{card_data.character_name}</h4>
                <span className={styles["character-card-place"]}>{card_data.character_place}</span>
                <div className={styles["character-card-type"]}>
                    <p>{card_data.character_type_1.toUpperCase()}</p>
                    <span>{card_data.character_type_2}</span>
                </div>
            </div>
        </div>
    )
}

export default function CharacterCard ({ character_data }: { character_data:MbtiCharactersT}) {
    return(
        <div className={styles["mbti-character-card"]}>             
            <div className={styles["character-card-container"]}>
                {  
                    Object.entries(character_data).map(([_,element],index) => (
                        <CardComponent key={index} card_data={element} />
                    ))
                }
            </div>                        
        </div>
    )
}