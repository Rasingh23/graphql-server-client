// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    categories(_, __, { dataSources }) {
      return dataSources.chuckNorrisAPI.getCategories();
    },
    random(_, { category }, { dataSources }) {
      // return dataSources;
      return dataSources.chuckNorrisAPI.getRandombyCategory(category);
    }
  }
};
module.exports = resolvers;
