import React from "react";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import Button from "../../components/Button/Button";
import styles from "./addpostpage.module.css"

const AddPostPage = () => {
    return (
        <div>
            <Button />
            <section className={styles.wrapper}>
                <h1 className={styles.title}>Добавить пост</h1>
                <AddPostForm />
            </section>
        </div>
    );
};

export default AddPostPage;
