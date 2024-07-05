import {ApolloQueryResult, gql} from "@apollo/client";
import {client} from "shared/api";

const GET_REPOSITORIES = gql`
    query getRepositories($query: String!, $after: String){
      search(
        type:REPOSITORY,
        query: $query,
        first: 10,
        after: $after
      ) {
        repositoryCount
        repos: edges{
          repo: node{
            ... on Repository {
              id,
              url,
              name,
              owner {
                id
                login
              }
              stargazerCount,
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 1) {
                      nodes {
                        committedDate
                      }
                    }
                  }
                }
              }
            }
          }
        },
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
}`

export const getRepositories = async (variables:{
    query: string,
    after: string,
}) => {
    const resp: ApolloQueryResult<any> = await client.query({
        query: GET_REPOSITORIES,
        variables: variables
    })
    return resp.data.search
}