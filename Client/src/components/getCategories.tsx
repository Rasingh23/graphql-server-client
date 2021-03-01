/*
 * Component to load buttons for the categories
 */

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
// import { GET_CATEGORIES } from "../graphql/queries";
import { GET_CATEGORIES } from "../graphql/queries";
import { Store } from "./store";
import GetJoke from "./getJoke";

export default function GetCategories(): React.ReactNode {
  const { state, dispatch } = React.useContext(Store);
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const [listCategories, setCategories] = useState([]);
  useEffect(() => {
    if (data && state.categories.length === 0) {
      setCategories(data.categories);
      return dispatch({
        type: "FETCH_CATEGORIES",
        payload: listCategories
      });
    }
  }, [state.categories.length, data, listCategories, dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return listCategories.map((category: string) => {
    return (
      <section key={category}>
        <GetJoke {...{ category: category }} />
      </section>
    );
  });
}
