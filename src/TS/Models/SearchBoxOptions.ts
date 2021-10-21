// TODO	:	Expose interfaces globally so it doesn't need manually referencing

export interface SearchBoxGroups {
	text: string;

	options: Array<SearchBoxOptions>;
}

export interface SearchBoxOptions {
	text: string;
	value: string | number;
}