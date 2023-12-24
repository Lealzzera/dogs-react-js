import React, { useCallback, useState } from "react";

const useFetch = () => {
	const [data, setData] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(async (url, options) => {
		let response;
		let responseJson;
		try {
			setError(null);
			setLoading(true);
			response = await fetch(url, options);
			responseJson = await response.json();
			if (response.ok === false) throw new Error(responseJson.message);
		} catch (err) {
			setError(err.message);
			responseJson = null;
		} finally {
			setLoading(false);
			setData(responseJson);
			return { response, responseJson };
		}
	}, []);

	return {
		data,
		loading,
		error,
		request,
	};
};

export default useFetch;
