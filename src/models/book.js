class Repo {
	data;

	constructor() {
		this.data = [
			{
				id: 0,
				title: 'The Awakening',
				authorId: 1
			},
			{
				id: 1,
				title: 'City of Glass',
				authorId: 1
			},
			{
				id: 2,
				title: 'ligma balls',
				authorId: 1
			},
		];
	}

	getAll() {
		return this.data
	}

	get(id) {
		return this.data.find((book) => {
			if (book.id === id) {
				return book
			}
		})
	}

	getBooksWithAuthor(id) {
		return this.data.filter((book) => {
			return book.authorId === id
		})
	}
}

export default new Repo()
