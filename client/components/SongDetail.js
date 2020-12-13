import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../queries/fetchSongDetails";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import gql from "graphql-tag";

const SongDetail = ({ data, mutate }) => {
  if (!data.song) {
    return <div>Loading...</div>;
  }
  const likeLyric = id => {
    mutate({
      variables: {
        id
      }
    });
  };
  return (
    <div className="container">
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <ul className="collection">
        {data.song.lyrics.map(lrc => (
          <li
            className="collection-item"
            key={lrc.id}
            style={{ position: "relative" }}
          >
            {lrc.content}
            <i
              className="material-icons"
              style={{
                position: "absolute",
                right: "5px",
                cursor: "pointer",
                color: lrc.likes !== 0 ? "blue" : "black"
              }}
              onClick={() => likeLyric(lrc.id)}
            >
              thumb_up
            </i>
          </li>
        ))}
      </ul>
      <LyricCreate />
    </div>
  );
};

const mutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;

export default graphql(mutation)(
  graphql(fetchSongDetails, {
    options: props => ({ variables: { id: props.params.id } })
  })(SongDetail)
);
