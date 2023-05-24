import React, { useEffect, useState } from "react";
import styles from "./singlepostpage.module.css";
import { NavLink, useParams } from "react-router-dom";
import postService from "../../services/posts";

const SinglePostPage = () => {
    const [post, setPost] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        postService.getPost(id).then((res) => setPost(res.data));
    }, []);
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.info}>
                <img src={post.img} alt="" className={styles.img} />
                <p className={styles.price}>ВХОД: {post.price}</p>
                <p className={styles.date}>ДАТА: {post.date}</p>
                <p className={styles.location}>АДРЕС: {post.location}</p>
                <h2 className={styles.descr}>{post.descr}</h2>
            </div>
            <NavLink to={post.link} className={styles.btn}>РЕГИСТРАЦИЯ</NavLink>
        </div>
    );
};

export default SinglePostPage;
