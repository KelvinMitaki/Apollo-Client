import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";
import { Link, hashRouter } from "react-router";

class SongCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title
        }
      })
      .then(() => hashRouter.push("/"));
    this.setState({ title: "" });
  }
  render() {
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <h3>Create new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title: </label>
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value })}
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
