import styles from "../../styles/mbtiinfo.module.scss";
import TriviaCard from "./Cards";

type IntroSectionT = {
    mbti_type: string
}


export default function IntroSection ({ mbti_type }:IntroSectionT) {
    return(
        <div className={styles["intro-section"]}>
            <div className={styles["intro-container-1"]}>
                <h3>About { mbti_type }</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit porro dicta enim quae possimus optio, aspernatur, ipsam corrupti necessitatibus mollitia inventore sunt? Itaque consequuntur suscipit in placeat praesentium dolor fugiat culpa eum tenetur ea! Ut ex repellat modi repudiandae tenetur perferendis debitis similique ad nulla vitae? Aliquid at aut iure perferendis minus asperiores quos, adipisci, nam eaque ullam illum totam? Aliquid illo perferendis amet quis totam ullam quidem quos, laudantium nobis modi recusandae nam eveniet molestiae dolore ea maxime minus ipsum repellat accusamus natus. Optio voluptates at nostrum perferendis unde assumenda ut minima neque rem doloribus, officiis, exercitationem maiores!
                </p>
            </div>
            <div className={styles["intro-container-2"]}>
                <h4>
                    The following type description is excerpted from "<i> Do What You Are by Tieger, Barron </i>"
                </h4>
                <p> 
                    <i>
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus in vero doloremque porro dolores officia debitis. Ad alias cum quibusdam ratione quo itaque! Quod reprehenderit rerum modi voluptatem quisquam voluptas perferendis consectetur labore ipsa. Optio fugiat at quasi adipisci sapiente natus reiciendis magnam, explicabo sint blanditiis perspiciatis? Sint quisquam autem blanditiis consequatur ipsa amet voluptatum, incidunt cupiditate non excepturi aperiam, unde commodi perferendis hic, cumque suscipit nulla inventore accusantium rerum id a! Culpa eum cupiditate est qui, sequi voluptatum voluptate accusamus dicta soluta illo architecto repellat facilis beatae, fugiat veritatis iure totam deserunt facere vel dolore inventore odio alias. Nihil."
                    </i>
                </p>
            </div>
            <TriviaCard />
        </div>
    )
}