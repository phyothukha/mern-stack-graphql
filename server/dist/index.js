import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
#Comments in Graphql strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines  the queryable fields for every book in our data source.
  type Book {
    title:String
    author:Author!
  }

  # The "Query" type is special: it lists all of the available queries that 
  # clients can execute, along with the return type for each.In this 
  # case, the "books" query returns an array of zero or more Books (defined above). 
  type Author {
    name:String
  }

  type Query {
    books:[Book]
  }

  type Mutation {
    addBook(title:String,author:String):Book
  }
`;
const books = [
    {
        title: "The Awakening",
        author: {
            name: "Kate Chopin",
        },
    },
    {
        title: "City of Glass",
        author: {
            name: "Paul Auster",
        },
    },
];
const resolvers = {
    Query: { books: () => books },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`server ready at 🛩️🚀 ${url}`);
