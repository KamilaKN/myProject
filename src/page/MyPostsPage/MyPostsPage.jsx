import React from "react";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./mypostspage.module.css";
import { Link } from "react-router-dom";

const MyPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const user = useSelector((state) => state.user.currentUser.user.id);
    console.log(user)

    const myPost = () => {
        return axios.get(`http://localhost:3001/posts?author=${user}`);
    };
    console.log(myPost)

    useEffect(() => {
        myPost().then((res) => setPosts(res.data));
    }, []);
    return (
        <>
            <Button />
            <section className={styles["posts-wrapper"]}>
                <div className={styles.card}>
                    <img src={posts.img} alt="" className={styles.img} />
                    <div className={styles.info}>
                        <Link  className={styles.title}>
                            {posts.title}
                        </Link>
                        <p className={styles.price}>Вход: {posts.price}</p>
                        <p className={styles.date}>Дата:{posts.date}</p>
                        <p className={styles.location}>Адрес:{posts.location}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyPostsPage;
