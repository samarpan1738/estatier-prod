import React, { useEffect, useState } from "react";
import request from "graphql-request";

function useQuery(query) {
	const [fetching, setFetching] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	return [
		{ fetching, error, data },
		(params) => {
			setFetching(true);
			request("https://estatier.herokuapp.com/graphql", query, params)
				.then((res) => {
					setFetching(false);
					setData(res);
				})
				.catch((err) => {
					setFetching(false);
					setError(err.message.split(":")[0]);
				});
		},
	];
}

export default useQuery;
