import App from "../components/App";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { GET_POST_QUERY, GET_ALL_SLUGS } from "../lib/queries";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const PostDetail = ({ post }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  
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

  const {
    data: { post },
  } = await apolloClient.query({
    query: GET_POST_QUERY,
    variables: PostQueryVars,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return addApolloState(apolloClient, {
    props: {
      post,
    },
    revalidate: 1,
  });
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const {
    data: { posts },
  } = await apolloClient.query({
    query: GET_ALL_SLUGS,
  });

  const paths = posts.edges.map((post) => ({
    params: { slug: post.node.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default PostDetail;
