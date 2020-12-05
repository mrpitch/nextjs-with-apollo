import { gql } from '@apollo/client'

export const ALL_POSTS_QUERY = gql`
query allPosts($first: Int!, $skip: Int!) {
  allPosts(orderBy: { createdAt: desc }, first: $first, skip: $skip) {
    id
    title
    votes
    url
    createdAt
  }
  _allPostsMeta {
    count
  }
}
`
export const allPostsQueryVars = {
    skip: 0,
    first: 10,
  }

export const getAllPostsQueryVars = {
  skip: 0,
  first: 20,
}

export const GET_POST_QUERY = gql`
query getPost($id: String!) {
  	Post(id: $id) {
    	id
    	title
    	createdAt
    	url
  	}	
  }
`
