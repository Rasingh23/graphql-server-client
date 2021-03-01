/*
* Component used to get and display joke
*
*/

import React, { useEffect, useState } from "react";
import { GET_JOKE } from "../graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { Store } from "./store";
export default function GetJoke(varCategory: object): JSX.Element {
  const { dispatch } = React.useContext(Store);
  const [newjoke, { data }] = useLazyQuery(GET_JOKE, {
    variables: varCategory,
    fetchPolicy: "no-cache"
  });
  const [retJoke, setJoke] = useState([]);
  useEffect(() => {
    if (data) {
      setJoke(data.random.value);
      return dispatch({
        type: "FETCH_JOKE",
        payload: retJoke
      });
    }
  }, [data, retJoke, dispatch]);

  const display = () => {
    if (data) {
      return (
        <div className="transit">
          {" "}
          <p> {data.random.value}</p>
        </div>
      );
    } else {
      return;
    }
  };
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          newjoke();
        }}
      >
        {varCategory.category}
      </button>
      {display()}
    </div>
  );
}
