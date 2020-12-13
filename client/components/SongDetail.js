import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../queries/fetchSongDetails";

const SongDetail = ({ data }) => {
  if (!data.song) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{data.song.title}</p>
    </div>
  );
};

export default graphql(fetchSongDetails, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
