import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { login } = useContext(UserContext);
	if (login === true) {
		return children;
	} else if (login === false) {
		return login ? children : <Navigate to='/login' />;
	} else {
		return <></>;
	}
};

export default ProtectedRoute;
