import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <h1 className={styles.title}> Keep in Touch </h1>
            <div className={styles.footer}>
                <p className={styles.titles}>Address :</p>
                <p className={styles.text}>24A Kingston St, Los Vegas</p>
            </div>
            <div className={styles.footer}>
                <p className={styles.titles}>Mail : </p>
                <p className={styles.text}>support@pages.com</p>
            </div>
            <div className={styles.footer}>
                <p className={styles.titles}>Phone :</p>
                <p className={styles.text}>(+22) 123 - 4567 - 900</p>
            </div>
        </footer>
    );
};

export default Footer;
