import React, { useState } from "react";
import Enviar from "../../../../../Assets/enviar.svg?react";
import useFetch from "../../../../../Hooks/useFetch";
import { COMMENT_POST } from "../../../../../api";
import Error from "../../../../Helper/Error";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
	const [comment, setComment] = useState("");
	const { request, error } = useFetch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { url, options } = COMMENT_POST(id, { comment });
		const { response, responseJson } = await request(url, options);
		if (response.ok) {
			setComment("");
			setComments((comments) => [...comments, responseJson]);
		}
	};

	return (
		<form
			className={`${styles.form} ${single ? styles.single : ""}`}
			onSubmit={handleSubmit}
		>
			<textarea
				className={styles.textarea}
				id='comment'
				name='comment'
				placeholder='Comente...'
				value={comment}
				onChange={({ target }) => setComment(target.value)}
			/>
			<button className={styles.button}>
				<Enviar />
			</button>
			<Error error={error} />
		</form>
	);
};

export default PhotoCommentsForm;
