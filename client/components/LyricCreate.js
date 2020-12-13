import gql from "graphql-tag";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { withRouter } from "react-router";
import { fetchSongDetails } from "../queries/fetchSongDetails";

export class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyric: ""
    };
    this.submitLyric = this.submitLyric.bind(this);
  }
  submitLyric(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        id: this.props.params.id,
        content: this.state.lyric
      }
    });
    this.setState({ lyric: "" });
  }
  render() {
    return (
      <form onSubmit={this.submitLyric}>
        <label htmlFor="lyric">Add Lyric</label>
        <input
          type="text"
          onChange={e => this.setState({ lyric: e.target.value })}
          value={this.state.lyric}
          name="lyric"
          id="lyric"
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($id: ID!, $content: String) {
    addLyricToSong(songId: $id, content: $content) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;

export default withRouter(graphql(mutation)(LyricCreate));
