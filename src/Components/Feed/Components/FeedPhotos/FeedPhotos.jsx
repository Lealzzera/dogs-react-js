import React, { useEffect } from "react";
import FeedPhotosItem from "./Components/FeedPhotosItem/FeedPhotosItem";
import useFetch from "../../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../../api";
import Error from "../../../Helper/Error";
import Loading from "../../../Helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, setModalPhoto, user, setInfinite }) => {
	const { data, loading, error, request } = useFetch();

	useEffect(() => {
		async function fetchPhotos() {
			const total = 6;
			const { url, options } = PHOTOS_GET({ page: page, total: total, user });
			const { response, responseJson } = await request(url, options);
			if (response && response.ok && responseJson.length < total)
				setInfinite(false);
		}
		fetchPhotos();
	}, [request, user, page, setInfinite]);

	if (error) return <Error error={error} />;
	if (loading) return <Loading />;
	if (data)
		return (
			<ul className={`${styles.feed} animeLeft`}>
				{data.map((photo) => (
					<FeedPhotosItem
						key={photo.id}
						photo={photo}
						setModalPhoto={setModalPhoto}
					/>
				))}
			</ul>
		);
	else return null;
};

export default FeedPhotos;
