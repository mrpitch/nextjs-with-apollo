import App from "../components/App"
import Header from "../components/Header"
import {
  GET_POST_QUERY,
  ALL_POSTS_QUERY,
  getAllPostsQueryVars,
} from "../lib/queries"
import { initializeApollo, addApolloState } from "../lib/apolloClient"

const PostDetail = ({ data }) => {

  const { Post } = data

  return (
    <App>
      <Header />
      <div key={Post.id}>
        <h1>
          {Post.title}, {Post.id}
        </h1>
      </div>
    </App>
  );
};

export async function getStaticProps({ params: { id } }) {
  const apolloClient = initializeApollo();
  const PostQueryVars = {
    id: id,
  };

  const { data } = await apolloClient.query({
    query: GET_POST_QUERY,
    variables: PostQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {
      data,
    },
    revalidate: 1,
  });
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: getAllPostsQueryVars,
  });

  const paths = data.allPosts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PostDetail
