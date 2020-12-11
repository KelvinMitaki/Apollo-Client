import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  if (!data.songs) {
    return <div>Loading</div>;
  }
  return (
    <div>
      {data.songs.map(sng => (
        <p key={sng.id}>{sng.title}</p>
      ))}
    </div>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
