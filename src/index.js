import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express'
import cors from 'cors';
import pkg from 'body-parser';

// My resolvers
import { resolvers as BookResolvers, type as BookType, queries as BookQueries } from "./api/book.js"
import { resolvers as AuthorResolvers, type as AuthorType, queries as AuthorQueries } from "./api/author.js"

// My repos
import { AuthorRepo } from "./repos/author.js"
import { BookRepo } from "./repos/book.js"

// My services
import { AuthorService } from "./services/author.js"
import { BookService } from "./services/book.js"

const types = [BookType, AuthorType];
const queries = [...BookQueries, ...AuthorQueries];

const deepMerge = (target, source) => {
	for (const key in source) {
		if (typeof target[key] === "object" && typeof source[key] === "object") {
			deepMerge(target[key], source[key])
			continue;
		}

		target[key] = source[key]
	}
}

// All resolvers
let resolvers = {}
deepMerge(resolvers, BookResolvers)
deepMerge(resolvers, AuthorResolvers)

// All types
const typeDefs = types.join("\n") + "\ntype Query {\n" + queries.join("\n") + "\n}";


const app = express()

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

await server.start();

const authorRepo = new AuthorRepo()
const bookRepo = new BookRepo()

const authorService = new AuthorService(authorRepo, bookRepo)
const bookService = new BookService(bookRepo, authorRepo)

app.use('/graphql', cors(), pkg.json(), expressMiddleware(server, {
	context: async () => {
		return {
			services: {
				author: authorService,
				book: bookService
			}
		}
	}
}));

app.listen({
	port: 3000,
}, () =>
	console.log(`🚀 Server ready at http://localhost:3000/graphql`)
);
