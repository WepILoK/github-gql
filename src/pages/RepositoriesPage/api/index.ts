import {ApolloQueryResult, gql} from "@apollo/client";
import {client} from "../../../shared/api";

const GET_REPOSITORIES = gql`
    query getRepositories($query: String!, $after: String){
      search(
        type:REPOSITORY,
        query: $query,
        first: 10,
        after: $after
      ) {
        repos: edges{
          repo: node{
            ... on Repository {
              id,
              url,
              name,
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

export const getRepositories = async () => {
    const reps: ApolloQueryResult<any> = await client.query({
        query: GET_REPOSITORIES,
        variables: {query: "is:public sort:updated react in:name user:WepILoK", after: ''}
    })
    return reps.data.search
}