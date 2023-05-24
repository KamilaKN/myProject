import React from "react";
import styles from "./intro.module.css"
import introImg from "./intro1.svg"

const Intro = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.info}>
                    {/* <h1 className={styles.title}>Будь в курсе о всех тренингах в нашем городе! </h1> */}
                    {/* <p className={styles.descr}>Lorem ipsum dolor sit amet.</p> */}
                </div>
                <img src={introImg} alt=""  className={styles.introImg}/>
            </div>
        </section>
    );
};

export default Intro;
