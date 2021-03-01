const { RESTDataSource } = require("apollo-datasource-rest");

const API_URL = "https://api.chucknorris.io/jokes/";

class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  async getCategories() {
    const data = await this.get("categories");
    return data;
  }
  async getRandombyCategory(category) {
    const data = await this.get("random", { category: category });
    return data;
  }
}

module.exports = ChuckNorrisAPI;
