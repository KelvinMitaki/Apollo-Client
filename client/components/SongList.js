import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { fetchSongs } from "../queries/fetchSongs";

const SongList = ({ data, mutate, router }) => {
  if (!data.songs) {
    return <div>Loading</div>;
  }
  const onSongDelete = id => {
    mutate({
      variables: {
        id
      }
    }).then(() => data.refetch());
  };
  return (
    <div className="container">
      <ul className="collection">
        {data.songs.map(sng => (
          <li
            key={sng.id}
            className="collection-item"
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => router.push(`/song/${sng.id}`)}
          >
            {sng.title}
            <i
              className="material-icons"
              style={{ position: "absolute", right: "0", cursor: "pointer" }}
              onClick={() => onSongDelete(sng.id)}
            >
              delete
            </i>
          </li>
        ))}
      </ul>
      <Link
        to="/song/create"
        style={{ position: "fixed", right: "50px", bottom: "50px" }}
        className="btn-floating btn-large red light"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongs)(SongList));
