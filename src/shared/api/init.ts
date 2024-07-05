import {ApolloQueryResult, gql} from "@apollo/client";
import {client} from "./client.ts";

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

export const fetchUserLogin = async () => {
    const resp: ApolloQueryResult<FetchUserLoginType> = await client.query({
        query: GET_USER_LOGIN,
        variables: {}
    })
    const login = resp.data.viewer.login
    localStorage.setItem('login', login)
    return login
}
