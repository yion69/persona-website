import styles from "../../styles/mbtipage.module.scss";
import MbtiRow from "./MbtiRow";
import { mbti_data } from "../../../mockdata/data_mbti";

export default function MbtiPage () {
    return(
        <div className={styles["root-container"]}>
            {Object.entries(mbti_data).map(([key,element],index)=>(
                <MbtiRow key={index} row_name={key} row_data={element} />
            ))}
        </div>
    )
}
