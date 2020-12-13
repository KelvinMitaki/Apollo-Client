import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../queries/fetchSongDetails";
import { Link } from "react-router";

const SongDetail = ({ data }) => {
  if (!data.song) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <Link to="/">Back</Link>
      <p>{data.song.title}</p>
    </div>
  );
};

export default graphql(fetchSongDetails, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
