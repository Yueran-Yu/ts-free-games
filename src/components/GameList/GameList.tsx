import React, {FC, ReactElement} from 'react';
import {List, ListItem} from '../../styles/main.styles';
import {GameCard} from '../GameCard/GameCard';

export const GameList: FC<GameDataProps> = ({err, games}): ReactElement => {

	return (
		<div>
			{err ? <p>Unable to get games data.</p> : ""}
			{games && games.length ?
				<List>
					{
						games.map((game: GameType) =>
							<ListItem key={game.id}>
								<GameCard content={game}/>
							</ListItem>)
					}
				</List> :
				<p>No games available.</p>}
		</div>
	)
}

