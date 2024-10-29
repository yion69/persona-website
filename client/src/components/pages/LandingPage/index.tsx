import styles from "../../styles/landingpage.module.scss";
import Navbar from "../../ui/Navbar";
import Hero from "./Hero";

export default function LandingPage() {
    return(
        <div className={styles["parent-container"]}>
            <Navbar />
            <Hero />
            <section></section>
        </div>
    )
}

//https://www.checklist.design/