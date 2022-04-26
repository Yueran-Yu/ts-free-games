import React, {ReactElement, useEffect, useState} from 'react';
import {GameList} from './GameList';
import axios from 'axios'
import {API_HOST, API_KEY} from "./constants";

export const GameListData = (): ReactElement => {
	const [games, setGames] = useState<GameType[]>([])
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		axios.get('/games', {
			baseURL: `https://${API_HOST}/api`,
			headers: {
				'X-RapidAPI-Host': API_HOST,
				'X-RapidAPI-Key': API_KEY
			},
			params: {
				platform: 'browser'
			}
		}).then(res => setGames(res.data))
			.catch(e => setErr(e.message))
	}, [])
	return (
		<GameList err={err} games={games}/>
	)
}