import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
