import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../queries/fetchSongDetails";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";

const SongDetail = ({ data }) => {
  if (!data.song) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricCreate />
    </div>
  );
};

export default graphql(fetchSongDetails, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
