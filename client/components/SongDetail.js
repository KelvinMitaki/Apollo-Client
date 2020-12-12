import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../queries/fetchSongDetails";

const SongDetail = props => {
  console.log(props);
  return <div>SongDetail</div>;
};

export default graphql(fetchSongDetails, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
