import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST, API_KEY} from "./constants";

export const useFetch = (params: FilterTypes): ResType => {
	const [games, setGames] = useState<GameType[]>([])
	const [err, setErr] = useState<string>('')

	const {platform, genre, tag, sortBy} = params

	useEffect(() => {
		axios.get('/games', {
			baseURL: `https://${API_HOST}/api`,
			headers: {
				'X-RapidAPI-Host': API_HOST,
				'X-RapidAPI-Key': API_KEY
			},
			params: {
				platform,
				category: genre,
				tag,
				'sort-by': sortBy
			}
		}).then(res => setGames(res.data))
			.catch(e => setErr(e.message))
	}, [platform, genre, sortBy, tag])

	return {games: games, error: err}
}