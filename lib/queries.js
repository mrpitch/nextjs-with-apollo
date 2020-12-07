import { gql } from "@apollo/client";

export const ALL_POSTS_QUERY = gql`
  query allPosts(
		$first: Int
		$after: String,
		$last: Int,
		$before: String
		) {
    posts(first: $first, after: $after, last: $last, before: $before, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          id
          title
          excerpt(format: RAW)
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const allPostsQueryVars = {
  first: 10,
	after: null,
	last: null,
	before: null
};

export const GET_ALL_SLUGS = gql`
  query getAllSlugs {
    posts(where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          slug
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const GET_POST_QUERY = gql`
  query postBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      author {
        node {
          avatar {
            url
          }
          firstName
          lastName
          name
        }
      }
      date
      featuredImage {
        node {
          sourceUrl
          title(format: RAW)
          altText
          caption
        }
      }
      blocks {
        ... on CoreParagraphBlock {
          originalContent
        }
        ... on CoreImageBlock {
          originalContent
        }
      }
      commentCount
      databaseId
      dateGmt
      excerpt(format: RAW)
      id
      slug
      title
      uri
    }
  }
`;
