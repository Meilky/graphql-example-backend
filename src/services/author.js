export class AuthorService {
	authorRepo;
	bookRepo;

	constructor(authorRepo, bookRepo) {
		this.authorRepo = authorRepo
		this.bookRepo = bookRepo
	}

	getAll() {
		return this.authorRepo.get();
	}

	getById(id) {
		const authors = this.authorRepo.get();

		return authors.find((author) => {
			if (author.id === id) {
				return author
			}
		})
	}

	getBooksFor(author) {
		const booksFor = [];

		if (!author.id) {
			return booksFor
		}

		const books = this.bookRepo.get();

		for (const book of books) {
			if (book.authorId !== author.id) {
				continue;
			}

			booksFor.push(book)
		}

		return booksFor;
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
