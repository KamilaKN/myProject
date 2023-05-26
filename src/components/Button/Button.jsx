import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import { useEffect } from "react";
import styles from "./button.module.css";

const Button = () => {
    const user = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user);
        if (!user.user) {
            navigate("/register");
        }
    }, [user]);

    const activeClass = ({ isActive }) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link;
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
            <NavLink to="/profile" className={activeClass}>
                    My profile
                </NavLink>
                <NavLink to="/add" className={activeClass}>
                    Add post
                </NavLink>
                <NavLink to="/myposts" className={activeClass}>
                    My posts
                </NavLink>
                <button
                    className={styles.btn}
                    onClick={() => dispatch(logout())}
                >
                    Exit
                </button>
            </div>
        </div>
    );
};

export default Button;
