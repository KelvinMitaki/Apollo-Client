import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    e.preventDefault();
    props.mutate({
      variables: {
        title: this.state.title
      }
    });
  }
  render() {
    return (
      <div className="container">
        <h3>Create new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title: </label>
          <input
            type="text"
            onChange={e => this.setState(e.target.value)}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
