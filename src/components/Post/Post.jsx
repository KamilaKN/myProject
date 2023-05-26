import React from 'react';
import styles from "./post.module.css";
import { useDispatch } from "react-redux";
import fovoriteImg from "./favorite-icon.png"
import {addToCart} from "../../redux/cartSlice"
import { NavLink } from 'react-router-dom';

const Post = ({title, img, price, date, location, descr, link, post}) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <img src={fovoriteImg} alt="" className={styles.icon} onClick={() => dispatch(addToCart(post))} />
        <div className={styles.info}>
            <img src={img} alt="" className={styles.img} />
            <p className={styles.price}>ВХОД: {price}</p>
            <p className={styles.date}>ДАТА: {date}</p>
            <p className={styles.location}>АДРЕС: {location}</p>
            <h2 className={styles.descr}>{descr}</h2>
        </div>
        <NavLink to={link} className={styles.btn}>РЕГИСТРАЦИЯ</NavLink>
        
    </div>
    );
};

export default Post;