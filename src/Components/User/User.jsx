import React, { useContext } from "react";
import UserHeader from "./Components/Header/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./Components/UserPhotoPost/UserPhotoPost";
import UserStats from "./Components/UserStats/UserStats";
import { UserContext } from "../../Context/UserContext";
import PageNotFound from "../PageNotFound/PageNotFound";

const User = () => {
	const { data } = useContext(UserContext);

	return (
		<section className='container'>
			<UserHeader />
			<Routes>
				<Route path='/' element={<Feed user={data.id} />} />
				<Route path='postar' element={<UserPhotoPost />} />
				<Route path='estatisticas' element={<UserStats />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</section>
	);
};

export default User;
