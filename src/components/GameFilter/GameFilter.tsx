import React from 'react';
import {FC} from 'react';

const GameFilter: FC<FilterProps> = ({onChange}): JSX.Element => {
	return (
		<form>
			<label htmlFor="platform-select">Platform:
				<select name="platform" id="platform-select">

				</select>
			</label>

		</form>
	);
};

export default GameFilter;
