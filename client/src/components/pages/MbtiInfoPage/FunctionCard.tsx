import { cognitiveFunctionT } from "../../../types/CognitiveTypes";
import styles from "../../styles/mbtiinfo.module.scss";
import CognitiveFunction from "./CognitiveFunction";

type CardDataT = {
    dominant: cognitiveFunctionT,
    auxiliary: cognitiveFunctionT,
    tertiary: cognitiveFunctionT,
    inferior: cognitiveFunctionT
}

type FunctionCardT = {
    card_data: CardDataT
}

export function FunctionCard ({ card_data }:FunctionCardT) {
    return(
        <div className={styles["infocard-container"]}>
            <div className={styles["functions-container"]}>
                {Object.entries(card_data).map(([_,element],index) => (
                    <CognitiveFunction 
                        key={index}
                        function_type={element.function_type}
                        function_name={element.function_name}
                        function_description={element.function_description} />
                ))}
            </div>
        </div>
    )
}
