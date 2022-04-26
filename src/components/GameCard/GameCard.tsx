import React, {FC} from 'react';
import {Img, StyledLink, Title, Details, Description, Genre, Icon} from "../../styles/main.styles";
import WindowIcon from '../assets/icons/windows.svg';
import Browser from '../assets/icons/browser.svg';

export const GameCard: FC<GameCardProps> = ({content}) => {
	const {id, title, thumbnail, short_description, genre, platform} = content

	const icons = platform.split(',').map(p => {
		const device = p.trim()
		if (device.toLowerCase().includes("window")) {
			return <Icon key={`${id}-windows`} alt="windows icon" src={WindowIcon}/>
		} else {
			return <Icon key={`${id}-browser`} alt="browser icon" src={`${Browser}`}/>
		}
	})

	const link = `/game/${id}`
	return (
		<StyledLink to={link}>
			<Img alt={title} src={thumbnail}/>
			<Details>
				<Title>{title}</Title>
				<Description>{short_description}</Description>
				<Genre>{genre}</Genre>
				{icons}
			</Details>
		</StyledLink>
	)
}