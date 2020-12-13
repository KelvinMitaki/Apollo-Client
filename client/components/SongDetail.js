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
            <span
              style={{
                position: "absolute",
                right: "10px"
              }}
            >
              <i
                className="material-icons"
                style={{
                  cursor: "pointer",
                  color: lrc.likes !== 0 ? "blue" : "black"
                }}
                onClick={() => likeLyric(lrc.id)}
              >
                thumb_up
              </i>
              <span
                style={{
                  transform: "translate(5px,-5px)",
                  display: "inline-block"
                }}
              >
                {lrc.likes}
              </span>
            </span>
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
