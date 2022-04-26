interface GameType {
	id: number
	title: string
	thumbnail: string
	short_description: string
	game_url: string
	genre: string
	platform: string
	publisher: string
	developer: string
	release_date: string
	freetogame_portfile_url: string
}

interface GameDataProps {
	err?: string
	games: GameType[]
}

interface GameCardProps {
	content: GameType
}

interface FilterProps {
	onChange: (e: React.ChangeEvent<HTMLFormElement>) => void
}

