const type = `
type Book {
	id: Int!
	title: String!
	author: Author
}
`;

const queries = ["books: [Book]!", "book(id: Int!): Book"]

const resolvers = {
	Query: {
		books: (_parent, _args, context) => {
			const bookService = context.services.book;

			return bookService.getAll();
		},
		book: (_parent, args, context) => {
			const bookService = context.services.book;

			return bookService.get(args.id)
		}
	},
	Book: {
		author: (parent, _args, context) => {
			const bookService = context.services.book;

			return bookService.getAuthorFor(parent);
		}
	}
}

export { type, queries, resolvers }
