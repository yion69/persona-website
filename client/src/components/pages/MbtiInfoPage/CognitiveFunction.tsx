import styles from "../../styles/mbtiinfo.module.scss";
import { cognitiveFunctionT } from "../../../types/CognitiveTypes";

export default function CognitiveFunction ({ function_type, function_name, function_description }:cognitiveFunctionT) {
    return(
        <div className={styles["cognitive-container"]}>
            <div className={styles["heading"]}>
                <h3>{ function_type }</h3>
                <span>{ function_name }</span>
            </div>
            <p>{ function_description }</p>
        </div>
    )
}
