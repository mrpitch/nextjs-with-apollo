import App from "../components/App"
import Header from "../components/Header"
import {
  GET_POST_QUERY,
  GET_ALL_SLUGS,
  
} from "../lib/queries"
import { initializeApollo, addApolloState } from "../lib/apolloClient"

const PostDetail = ({ data }) => {

  const { post } = data

  return (
    <App>
      <Header />
      <div key={post.id}>
        <h1>
          {post.title}, {post.id}
        </h1>
      </div>
    </App>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const apolloClient = initializeApollo();
  const PostQueryVars = {
    id: slug,
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
    query: GET_ALL_SLUGS
  });

  const paths = data.posts.edges.map((post) => ({
    params: { slug: post.node.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default PostDetail
