import React from "react";
import UserHeader from "./Components/Header/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./Components/UserPhotoPost/UserPhotoPost";
import UserStats from "./Components/UserStats/UserStats";

const User = () => {
	return (
		<section className='container'>
			<UserHeader />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='postar' element={<UserPhotoPost />} />
				<Route path='estatisticas' element={<UserStats />} />
			</Routes>
		</section>
	);
};

export default User;
