import React, { useState } from "react";
import FeedModal from "./Components/FeedModal/FeedModal";
import FeedPhotos from "./Components/FeedPhotos/FeedPhotos";

const Feed = () => {
	const [modalPhoto, setModalPhoto] = useState(null);
	return (
		<div>
			{modalPhoto && (
				<FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
			)}
			<FeedPhotos setModalPhoto={setModalPhoto} />
		</div>
	);
};

export default Feed;
