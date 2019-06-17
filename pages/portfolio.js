import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    let post = {};
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
      );
      post = response.data;
    } catch (err) {
      console.log(err);
    }

    return { post: post };
  }

  render() {
    const { post } = this.props;
    return (
      <BaseLayout>
        <h1>{post.title}</h1>
        <p>Body: {post.body}</p>
        <p>Id: {post.id}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
