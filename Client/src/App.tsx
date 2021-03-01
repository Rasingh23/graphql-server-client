/*
 * Main Application page
 */

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import "./css/styles.css";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import GetCategories from "./components/getCategories";
// import { GET_CATEGORIES } from "../graphql/queries";
const client = new ApolloClient({
  uri: "https://fvzzf.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

const PageTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? "Switch to light mode" : "switch to dark mode"}
      <label className="switch">
        <input
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
export default function App() {
  return (
    <ThemeProvider>
      <PageTheme />

      <ApolloProvider client={client}>
        <div className="App">
          <h1> CHUCK NORRIS JOKES</h1>
          <section>Click a category to get a random joke:</section>
          <br />
          <React.Fragment>
            <section>
              <div>
                {" "}
                <GetCategories />
              </div>
            </section>
          </React.Fragment>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}
