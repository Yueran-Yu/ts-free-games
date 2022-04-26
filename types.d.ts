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

interface GameCardProps {
	content: GameType
}

interface FilterProps {
	handleOnChange: (e: React.ChangeEvent<HTMLFormElement>) => void
}

interface FilterTypes {
	platform: string
	sortBy: string
	genre?: string
	tag?: string
}


interface ResType {
	games: GameType[]
	error: string
}