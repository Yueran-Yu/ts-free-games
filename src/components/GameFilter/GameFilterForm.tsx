import React, {FC} from 'react';
import {Form, Label, Select} from '../../styles/main.styles';
import {PLATFORMS, GENRES, TAGS, SORT_BY} from "./constants";

export const GameFilterForm: FC<FilterProps> = ({handleOnChange}): JSX.Element => {
	return (
		<Form onChange={handleOnChange}>
			<Label htmlFor="platform-select">Platform:
				<Select name="platform" id="platform-select">
					{PLATFORMS.map(platform => <option key={platform.value} value={platform.value}>{platform.display}</option>)}
				</Select>
			</Label>

			<Label htmlFor="genre-select">Genre:
				<Select name="genre" id="genre-select">
					{GENRES.map(genre => <option key={genre.value} value={genre.value}>{genre.display}</option>)}
				</Select>
			</Label>

			<Label htmlFor="tag-select">Tag:
				<Select name="tag" id="tag-select">
					{TAGS.map(tag => <option key={tag.value} value={tag.value}>{tag.display}</option>)}
				</Select>
			</Label>

			<Label htmlFor="sortBy-select">SortBy:
				<Select name="sortBy" id="sortBy-select">
					{SORT_BY.map(sortby => <option key={sortby.value} value={sortby.value}>{sortby.display}</option>)}
				</Select>
			</Label>

		</Form>
	);
};

