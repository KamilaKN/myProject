import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import styles from "./addpostform.module.css"

const AddPostForm = () => {
    const user = useSelector((state) => state.user.currentUser);
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const [link, setLink] = useState("");

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            title,
            descr,
            price,
            date,
            location,
            link,
            img,
            author:  user.user.id,
        }
        axios.post(" http://localhost:3001/posts", newPost)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    return (
        <form className={styles.form} onSubmit={addPost}>
            <TextField
                label="title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: "20px" }}
            />
            <TextField
                label="descr"
                variant="outlined"
                fullWidth
                value={descr}
                onChange={(e) => setDescr(e.target.value)}
                style={{ marginBottom: "20px" }}
            />
            <TextField
                label="date"
                variant="outlined"
                fullWidth
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ marginBottom: "20px" }}
            />
            <TextField
                label="location"
                variant="outlined"
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ marginBottom: "20px" }}
            />
            <TextField
                label="URL на фото"
                variant="outlined"
                fullWidth
                value={img}
                onChange={(e) => setImg(e.target.value)}
                style={{ marginBottom: "20px" }}
            />
            <TextField
                 label="URL на регистрацию"
                 variant="outlined"
                 fullWidth
                value={link}
                onChange={(e) => setLink(e.target.value)}
                style={{ marginBottom: "20px" }}
            />
            <select className={styles.select} value={price} onChange={(e) => setPrice(e.target.value)}>
                <option value="Бесплатный">Бесплатный</option>
                <option value="Платный">Платный</option>
            </select>
             <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#FFCA42", fontSize: "19px" }}
                >
                    Создать
                </Button>
        </form>
    );
};

export default AddPostForm;
