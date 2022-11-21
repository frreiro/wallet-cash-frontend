export interface IFilterSelector{
	setVisibility: () => void;
}
export interface IFilterDate{
	isActivated: boolean;
	date: string | null;
}
export interface IFiltersTypes{
	date?: string
	method?: 'cashout' | 'cashin' | 'all' 
}
