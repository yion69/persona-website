import { useNavigate } from "react-router-dom";
import styles from "../../styles/mbtipage.module.scss";

export type cardT = {
    mbti_image: string,
    mbti_name: string,
    mbti_type: string,
    mbti_description: string,
}


export function MbtiCard ({ mbti_image, mbti_name, mbti_type, mbti_description}:cardT) {
   
    const navigate = useNavigate();
    
    function handleCardClick (mbti_name:string) {
        navigate(`info?type=${encodeURIComponent(mbti_name)}`,{
            state: {
                mbti: {
                    type: mbti_type,
                    name: mbti_name,
                    image: mbti_image,
                    description: mbti_description,
                }
            }
        })
    }

    return(
        <div className={styles["mbticard-container"]} onClick={() => handleCardClick(mbti_name)}>
            <div className={styles["card-img"]}>
                <img className={styles["image"]} src={mbti_image} alt={mbti_name}/>
            </div>
            <div className={styles["card-title"]}>
                <h3 className={styles["name"]}>{mbti_name}</h3>
                <p className={styles["type"]}>{mbti_type}-A / {mbti_type}-T</p>
                <p className={styles["description"]}>{mbti_description}</p>
            </div>
        </div>
    )
}