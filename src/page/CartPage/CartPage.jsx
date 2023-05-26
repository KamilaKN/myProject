import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cartpage.module.css"
import deleteimg from "./delete.png"
import { deletePostCart } from "../../redux/cartSlice";

const CartPage = () => {
    const posts = useSelector(state => state.cart.postsCart)
    const dispatch = useDispatch()
    const handelDeleteClick = (postId) => {
        dispatch(deletePostCart(postId))
    }
    return (
        <section className={styles["posts-wrapper"]}>
           {posts.map(posts => {
            return (
                <article className={styles.card}>
                <img src={posts.img} alt="" className={styles.img} />
                <div className={styles.info}>
                    <h4 className={styles.title}>{posts.title}</h4>
                    <p className={styles.price}>Вход: {posts.price}</p>
                    <p className={styles.date}>Дата:{posts.date}</p>
                    <p className={styles.location}>Адрес:{posts.location}</p>
                   <button onClick={() => {handelDeleteClick(posts.id)}}>
                    <img src={deleteimg} alt="" className={styles.icon}  />
                    </button> 
                    
                </div>
            </article>
            )
           })}
        </section>
    );
};

export default CartPage;
