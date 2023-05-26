import React from "react";
import {  useSelector } from "react-redux";
import styles from "./profilepage.module.css";
import Button from "../../components/Button/Button";

const ProfilePage = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <>
        <Button/>
        <section className={styles.wrapper}>
            <div className={styles.cart}>
                <img
                    className={styles.cartImg}
                    src="https://xsgames.co/randomusers/avatar.php?g=female"
                    alt="photo"
                />
                <div className={styles.user}>
                    <h1 className={styles.name}>{user.user?.name}</h1>
                    <p className={styles.email}>{user.user?.email}</p>
                </div>
            </div>
        </section>
        </>
    );
};

export default ProfilePage;
