export class AuthorRepo {
	authors;

	constructor() {
		this.authors = [
			{
				id: 0,
				name: 'lig',
			},
			{
				id: 1,
				name: 'ma',
			},
			{
				id: 2,
				name: 'bal',
			},
		];
	}

	get() {
		return this.authors
	}

	update(updatedAuthor) {
		const existingAuthor = this.authors.find((author) => {
			if (author.id === updatedAuthor.id) {
				return author
			}
		})

		if (!existingAuthor) {
			return;
		}

		if (typeof updatedAuthor.name === "string") {
			existingAuthor.name = updatedAuthor.name
		}
	}

	delete(authorToDelete) {
		const index = this.authors.findIndex((author) => {
			return author.id === authorToDelete.id
		})

		if (index === -1) {
			return;
		}

		this.authors.splice(index, 1)
	}

	add(author) {
		author.id = this.authors.length

		this.authors.push(author)
	}
}
