import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import LoginCreate from "./Components/LoginCreate/LoginCreate";
import LoginPasswordLost from "./Components/LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./Components/LoginPasswordReset/LoginPasswordReset";
import { UserContext } from "../../Context/UserContext";
import styles from "./Login.module.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import Head from "../Helper/Head";

const Login = () => {
	const { login } = useContext(UserContext);

	if (login) return <Navigate to='/conta' />;

	return (
		<section className={styles.login}>
			<Head title='Login' />
			<div className={styles.forms}>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route path='criar' element={<LoginCreate />} />
					<Route path='perdeu' element={<LoginPasswordLost />} />
					<Route path='resetar' element={<LoginPasswordReset />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</div>
		</section>
	);
};

export default Login;
