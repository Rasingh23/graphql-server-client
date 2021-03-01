const typeDefs = require("./src/typedefs");
const resolvers = require("./src/resolver");
const { ApolloServer } = require("apollo-server");
const ChuckNorrisAPI = require("./src/dataSource");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    chuckNorrisAPI: new ChuckNorrisAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
