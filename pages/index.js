import App from "../components/App";
import InfoBox from "../components/InfoBox";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { ALL_POSTS_QUERY, allPostsQueryVars } from "../lib/queries";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
    <PostList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default IndexPage;
