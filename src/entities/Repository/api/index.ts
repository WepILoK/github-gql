import {ApolloQueryResult} from "@apollo/client";
import {client} from "shared/api";
import {RepositoryDetailsType, RepositoryState} from "../model";
import {GET_REPOSITORIES, GET_REPOSITORY_DETAILS} from "./gql.tsx";


export const getRepositories = async (variables:{
    query: string,
    after: string,
}) => {
    const resp: ApolloQueryResult<{search: RepositoryState}> = await client.query({
        query: GET_REPOSITORIES,
        variables: variables
    })
    return resp.data.search
}

export const getRepositoryDetails = async (variables:{
    owner: string,
    name: string,
}) => {
    const resp: ApolloQueryResult<{repository: RepositoryDetailsType}> = await client.query({
        query: GET_REPOSITORY_DETAILS,
        variables: variables
    })
    return resp.data
}