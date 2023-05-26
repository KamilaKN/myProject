import React from "react";
import styles from "./about.module.css";

const About = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.about}>
                    <p className={styles.title}>
                        Знания, которые изменят качество Вашей жизни!
                    </p>
                </div>
                <p className={styles.descr}>KR</p>
            </div>
        </section>
    );
};

export default About;
