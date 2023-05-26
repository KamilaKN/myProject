import React from "react";
import styles from "./heder.module.css";
import { NavLink } from "react-router-dom";
import logoImg from "./favorite-icon.png";
import { useSelector } from "react-redux";

const Header = () => {
    const cartQuantity = useSelector(state => state.cart.quantityCart)
    const activeClass = ({ isActive }) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link;
    };

    return (
        <header>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <NavLink to="" className={activeClass}>
                        Home
                    </NavLink>
                    <NavLink to="/posts" className={activeClass}>
                        Posts
                    </NavLink>
                    <NavLink to="/about" className={activeClass}>
                        about 
                    </NavLink>
                    <NavLink to="/profile" className={activeClass}>
                        Profile
                    </NavLink>
                    <NavLink to="/cart" className={styles.icon}>
                       {cartQuantity > 0 && <span className={styles.quantity}>{cartQuantity}</span>}
                        <img src={logoImg} alt="" className={styles.icon} />
                    </NavLink>
                </nav>
                <NavLink to="/register" className={styles["header-btn"]}>
                Sign up
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
