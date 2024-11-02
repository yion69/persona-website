import styles from "../../styles/landingpage.module.scss";
import Navbar from "../../ui/Navbar";
import Hero from "./Hero";
import MainTwo from "./SectionTwo";

export default function LandingPage() {
    return(
        <div className={styles["parent-container"]}>
            <Navbar />
            <Hero />
            <MainTwo />
        </div>
    )
}

//https://www.checklist.design/