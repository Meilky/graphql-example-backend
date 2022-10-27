export class BookService {
	bookRepo;
	authorRepo;

	constructor(bookRepo, authorRepo) {
		this.bookRepo = bookRepo
		this.authorRepo = authorRepo
	}

	getAll() {
		return this.bookRepo.get();
	}

	getById(id) {
		const books = this.bookRepo.get();

		return books.find((book) => {
			if (book.id === id) {
				return book
			}
		})
	}

	getAuthorFor(book) {
		if (!book.id) {
			return undefined;
		}

		const authors = this.authorRepo.get();

		return authors.find((author) => {
			if (author.id === book.authorId) {
				return author
			}
		})
	}

	delete(author) {
		if (typeof author.id !== "number") {
			return;
		}

		this.authorRepo.delete(author.id)
	}

	add(author) {
		this.authorRepo.add(author)
	}

	update(author) {
		this.authorRepo.update(author)
	}
}
