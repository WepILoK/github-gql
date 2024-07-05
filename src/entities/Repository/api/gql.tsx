import {gql} from "@apollo/client";

export const GET_REPOSITORY_DETAILS = gql`
    query getRepositoryDetails($owner: String!, $name: String!){
      repository(owner: $owner, name: $name) {
        name
        description
        stargazerCount
        owner {
          login
          avatarUrl
          url
        }
        languages(first: 100) {
          nodes {
            name
          }
        }
      }
}`

export const GET_REPOSITORIES = gql`
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
