import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import { Route, Router, hashHistory } from "react-router";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import LyricCreate from "./components/LyricCreate";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={SongList} exact />
        <Route path="/song/create" component={SongCreate} exact />
        <Route path="/lyric/create" component={LyricCreate} exact />
        <Route path="/song/:id" component={SongDetail} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
