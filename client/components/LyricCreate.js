import React, { Component } from "react";

export class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyric: ""
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ lyric: e.target.value })}
          value={this.state.lyric}
        />
      </div>
    );
  }
}

export default LyricCreate;
