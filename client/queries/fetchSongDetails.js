import gql from "graphql-tag";

export const fetchSongDetails = gql`
  query SongDetail($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;
