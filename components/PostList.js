import { useQuery, NetworkStatus } from '@apollo/client'
import { ALL_POSTS_QUERY, allPostsQueryVars } from '../lib/queries'
import ErrorMessage from './ErrorMessage'

export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  const loadMorePosts = () => {
		fetchMore({
			variables: {
				after: posts.pageInfo.endCursor,
			},
		})

	}

  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading && !loadingMorePosts) return <div>Loading</div>

  const { posts } = data
  const areMorePosts = posts.pageInfo.hasNextPage

  return (
    <section>
      <ul>
        {posts.edges.map((post, index) => (
          <li key={post.node.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={`/${post.node.slug}`}>{post.node.title}, {post.node.id}</a>
            </div>
          </li>
        ))}
      </ul>
      {areMorePosts ? (
        <button onClick={loadMorePosts} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
				) : null}

      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  )
}
