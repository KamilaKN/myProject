import React from "react";
import styles from "./register.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import authServices from "../../services/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("обязательное поле")
            .email("Введите корректный email"),
        name: yup.string().required("обязательное поле"),
        password: yup.string().required("обязательное поле"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { data } = await authServices.registration(values);
                console.log(data);
                toast("Пользователь зарегистрирован");
            } catch (err) {
                toast("ошибка");
            }
        },
    });
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Регистрация</h1>
            <p className={styles.descr}>Если у вас уже есть учетная запись. Вы можете <NavLink to="/login"> Войти здесь!</NavLink></p>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    error={Boolean(formik.errors.email)}
                    onBlur={formik.handleBlur}
                    helperText={formik.errors.email ? formik.errors.email : ""}
                    label="Ваш email"
                    variant="outlined"
                    type="email"
                    name="email"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <TextField
                    error={Boolean(formik.errors.name)}
                    onBlur={formik.handleBlur}
                    helperText={formik.errors.name ? formik.errors.name : ""}
                    label="Ваш имя"
                    variant="outlined"
                    type="text"
                    name="name"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                <TextField
                    error={Boolean(formik.errors.password)}
                    onBlur={formik.handleBlur}
                    helperText={
                        formik.errors.password ? formik.errors.password : ""
                    }
                    label="Ваш пароль"
                    variant="outlined"
                    type="password"
                    name="password"
                    fullWidth
                    style={{ marginBottom: "40px" }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#FFCA42", fontSize: "19px" }}
                >
                    Зарегистрироваться
                </Button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
};

export default RegisterPage;
