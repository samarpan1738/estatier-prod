import React, { useEffect, useState } from "react";
import request, { GraphQLClient } from "graphql-request";
const endpoint = "https://estatier.herokuapp.com/graphql";
const graphQLClient = new GraphQLClient(endpoint);
function useQuery(query) {
	const [fetching, setFetching] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	return [
		{ fetching, error, data },
		(params) => {
			setFetching(true);
			setError(null);
			setData(null);
			console.log("Params => ", params);
			return new Promise((resolve, reject) => {
				if (params.requestHeaders)
					graphQLClient.setHeaders(params.requestHeaders);
				graphQLClient
					.request(query, params.data)
					.then((res) => {
						setFetching(false);
						setData(res);
						resolve(res);
					})
					.catch((err) => {
						// console.log(err.message.split(":")[0]);
						// console.log(err);
						setFetching(false);
						setError(err.message.split(":")[0]);
						reject(err.message.split(":")[0]);
					});
			});
		},
	];
}

export default useQuery;
