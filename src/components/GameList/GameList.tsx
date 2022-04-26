import React, {ChangeEvent, useCallback, useState} from 'react';
import {List, ListItem} from '../../styles/main.styles';
import {GameCard} from '../GameCard/GameCard';
import {GameFilterForm} from "../GameFilter/GameFilterForm";
import {useFetch} from "../hooks/useFetch";

export const GameList = (): JSX.Element => {
	const [filter, setFilter] = useState<FilterTypes>(
		{
			platform: 'browser', sortBy: 'relevance', genre: 'mmo', tag: 'mmofps'
		})
	const {error, games} = useFetch(filter)
	const handleOnChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFilter(filter => ({
			...filter,
			[e.target.name]: e.target.value
		}))
	}, [])

	return (
		<div>
			{error ? <p>Unable to get games data.</p> : ""}
			{games && games.length ?
				<>
					<GameFilterForm handleOnChange={handleOnChange}/>
					<List>
						{
							games.map((game: GameType) =>
								<ListItem key={game.id}>
									<GameCard content={game}/>
								</ListItem>)
						}
					</List>
				</> :
				<p>No game available.</p>}
		</div>
	)
}

