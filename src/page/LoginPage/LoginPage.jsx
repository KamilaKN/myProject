import React from "react";
import styles from "./loginpage.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import authService from "../../services/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("обязательное поле")
            .email("Введите корректный email"),
        password: yup.string().required("обязательное поле"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { data } = await authService.login(values);
                dispatch(loginSuccess(data))
                navigate("/profile")
                toast("Вы успешно авторизовались");
            } catch (error) {
                toast(error.response.data);
            }
        },
    });
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Логин</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    error={Boolean(formik.errors.email)}
                    onBlur={formik.handleBlur}
                    helperText={formik.errors.email && formik.errors.email}
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
                    error={Boolean(formik.errors.password)}
                    onBlur={formik.handleBlur}
                    helperText={
                        formik.errors.password && formik.errors.password
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
                    Логин
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

export default LoginPage;
