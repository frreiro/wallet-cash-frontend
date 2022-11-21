export interface ITransaction {
	id: number,
	value: number
	type: 'cash-in' | 'cash-out',
	date: Date,
	from: {
		id: number,
		username: string,
		accountId: number
	},
	to: {
		id: number,
		username: string,
		accountId: number
	},
}