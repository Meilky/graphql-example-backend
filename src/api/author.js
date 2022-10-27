const type = `
type Author {
	id: Int!
	name: String!
	books: [Book]!
}
`;

const queries = ["authors: [Author]", "author(id: Int!): Author"]

const resolvers = {
	Query: {
		authors: (_parent, _args, context) => {
			const authorservice = context.services.author;

			return authorservice.getAll();
		},
		author: (_parent, args, context) => {
			const authorService = context.services.author;

			return authorService.get(args.id);
		}
	},
	Author: {
		books: (parent, _args, context) => {
			const authorService = context.services.author;

			return authorService.getBooksFor(parent);
		}
	}
}

export { type, queries, resolvers }
