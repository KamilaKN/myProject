import React from 'react';
import styles from "./posts.module.css"
import { Link } from 'react-router-dom';


const Posts = ({img, title, price, date, location, id, gridView}) => {
    return (
        <div className={gridView ? styles.card : styles["card-list"]}>
            <img src={img} alt="" className={styles.img}/>
            <div className={styles.info}>
                <Link to={`/post/${id}`} className={styles.title}>{title}</Link>
                <p className={styles.price}>Вход: {price}</p>
                <p className={styles.date}>Дата:{date}</p>
                <p className={styles.location}>Адрес:{location}</p>
            </div>
        </div>
    );
};

export default Posts;