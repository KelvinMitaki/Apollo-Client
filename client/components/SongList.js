import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { fetchSongs } from "../queries/fetchSongs";

const SongList = ({ data }) => {
  if (!data.songs) {
    return <div>Loading</div>;
  }
  return (
    <div className="container">
      <ul className="collection">
        {data.songs.map(sng => (
          <li key={sng.id} className="collection-item">
            {sng.title}
          </li>
        ))}
      </ul>
      <Link
        to="/song/create"
        style={{ position: "fixed", right: "150px" }}
        className="btn-floating btn-large red light"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(fetchSongs)(SongList);
