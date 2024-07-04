import {createEffect} from "effector";
import {client} from "../../shared/api";
import {ApolloQueryResult, gql} from "@apollo/client";

const GET_USER_LOGIN = gql`
    query {
      viewer {
        login
      }
    }
`

type FetchUserLoginType = {
    viewer: {
        login: string
    }
}

export const fetchUserLoginFx = createEffect<void, string, Error>(async () => {
    const reps:ApolloQueryResult<FetchUserLoginType> = await client.query({
        query: GET_USER_LOGIN,
        variables: {}
    })
    return reps.data.viewer.login
})