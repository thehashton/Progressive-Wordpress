import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './index.css';
import PostsSearch from './components/PostSearch';

const client = new ApolloClient({
  // URL of your WordPress site.
  uri: "http://localhost:8080/wp/graphql"
});

export const App = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <h2 className="title">
        WPGraphQL, React & Apollo {' '}
        <span className="emoji" role="img" aria-label="rocket">🚀</span>
      </h2>
      <PostsSearch />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));