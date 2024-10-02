import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs.js";

const resolvers = {
  Query: {
    // tweet: (root, args) => { 형식으로 쓸 수도 있음.
    tweet(root, args) {
      console.log("tweet resolver");
      return null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
