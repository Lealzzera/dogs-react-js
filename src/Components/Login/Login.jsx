import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import LoginCreate from "./Components/LoginCreate/LoginCreate";
import LoginPasswordLost from "./Components/LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./Components/LoginPasswordReset/LoginPasswordReset";
import { UserContext } from "../../Context/UserContext";
import styles from "./Login.module.css";

const Login = () => {
	const { login } = useContext(UserContext);

	if (login) return <Navigate to='/conta' />;

	return (
		<section className={styles.login}>
			<div className={styles.forms}>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route path='criar' element={<LoginCreate />} />
					<Route path='perdeu' element={<LoginPasswordLost />} />
					<Route path='resetar' element={<LoginPasswordReset />} />
				</Routes>
			</div>
		</section>
	);
};

export default Login;
