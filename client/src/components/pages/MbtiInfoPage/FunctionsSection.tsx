import { cognitiveStackExplanationT, MbtiCognitiveT } from "../../../types/CognitiveTypes";
import { MbtiCharactersT } from "../../../types/MbtiTypes";
import styles from "../../styles/mbtiinfo.module.scss";
import { ReferenceCard } from "./Cards";
import CelebritiesCard from "./CharacterCard";
import { FunctionCard } from "./FunctionCard";

type FunctionSectionPropsT = {
    mbti_text: string,
    mbti_stack: MbtiCognitiveT,
    mbti_characters: MbtiCharactersT,
}

type FunctionExplanationSectionT = {
    explanation_data: cognitiveStackExplanationT,
    character_data: MbtiCharactersT,
}

export default function FunctionSection ({ mbti_text, mbti_stack, mbti_characters }:FunctionSectionPropsT) {
    return(
        <div className={styles["function-section"]}>
            <div className={styles["infocard-text"]}>
                <h3>Functional Stack</h3>
                <p>{ mbti_text }</p>
            </div>
            <FunctionCard card_data={mbti_stack.function_data_1} />
            <FunctionExplanationSection 
                explanation_data={ mbti_stack.function_data_2 }
                character_data={ mbti_characters } />
        </div>
    )
}

function FunctionExplanationSection ({ explanation_data, character_data }:FunctionExplanationSectionT) {
    return (
        <div className={styles["function-explanation-container"]}>
            <div className={styles["explanation-section-1"]}>

                <h4 className={styles["explanation-heading"]}>Cognitive Functions</h4>
                <ul className={styles["explanation-list"]}>
                    <li className={styles["list-item"]}>
                        <h5>Dominant</h5>
                        <p>{ explanation_data.dominant }</p>
                    </li>
                    <li className={styles["list-item"]}>
                        <h5>Auxiliary</h5>
                        <p>{ explanation_data.auxiliary }</p>
                    </li>
                    <li className={styles["list-item"]}>
                        <h5>Tertiary</h5>
                        <p>{ explanation_data.dominant }</p>
                    </li>
                    <li className={styles["list-item"]}>
                        <h5>Inferior</h5>
                        <p>{ explanation_data.dominant }</p>
                    </li>
                </ul>
            </div>
            <div className={styles["explanation-section-2"]}>
                <ReferenceCard />
                <CelebritiesCard character_data={character_data} />
            </div>
        </div>
    )
}