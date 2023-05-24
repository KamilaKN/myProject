import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./profilepage.module.css"
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/userSlice';

const ProfilePage = () => {
    const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!user) {
            navigate("/login")
        }
    }, [])
    return (
        <section className={styles.wrapper}>
            <div className={styles.cart}>
                    <button className={styles.btn} onClick={() => dispatch(logout())}> выйти</button>
                <div className={styles.info}>
                    <h1 className={styles.title}>{user.user?.name}</h1>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;