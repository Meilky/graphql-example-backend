export class BookRepo {
	books;

	constructor() {
		this.books = [
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
			{
				id: 3,
				title: 'ligma balls part.2',
				authorId: 1
			},
		];
	}

	get() {
		return this.books
	}

	update(updatedBook) {
		const existingBook = this.books.find((book) => {
			if (book.id === id) {
				return book
			}
		})

		if (!existingBook) {
			return;
		}

		if (typeof updatedBook.name === "string") {
			existingBook.name = updatedBook.name
		}

		if (typeof updatedBook.authorId === "number") {
			existingBook.authorId = updatedBook.authorId
		}
	}

	delete(bookToDelete) {
		const index = this.books.findIndex((book) => {
			return book.id === bookToDelete.id
		})

		if (index === -1) {
			return;
		}

		this.books.splice(index, 1)
	}

	add(book) {
		book.id = this.books.length

		this.books.push(book)
	}
}
