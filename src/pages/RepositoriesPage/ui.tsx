import {gql, useQuery} from "@apollo/client";
import {client} from "shared/api";
import {useEffect} from "react";
import {dateToRUFormat} from "shared/utils/dateToRUFormat.ts";
import {Avatar, Button, Headline, Input} from "shared/ui";
import {RepositoryCard} from "../../entities/Repository/ui";


const AAA = gql`
    query getRepositoryList($query: String!){
      search(
        type:REPOSITORY,
        query: $query,
        first: 10,
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

export const RepositoriesPage = () => {
    // const {loading, error, data} = useQuery(AAA)
    useEffect(() => {
        console.log(dateToRUFormat("2023-12-20T10:41:28Z"));
        client.query({
            query: AAA,
            variables: {query: "is:public sort:updated react in:name user:WepILoK"}
        }).then((data) => {
            console.log(data.data.search.repos[0].repo);
        })
    }, [])
    return <div>
        <Input/>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(465px, 1fr))", gridGap: "10px", justifyContent: "center", overflowY: "scroll", height: "800px"}}>
            <RepositoryCard/><RepositoryCard/>
            <RepositoryCard/><RepositoryCard/>
            <RepositoryCard/><RepositoryCard/>
            <RepositoryCard/><RepositoryCard/>
            <RepositoryCard/><RepositoryCard/>
        </div>

    </div>
}