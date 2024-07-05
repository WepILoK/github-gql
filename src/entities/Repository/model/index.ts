import {createEffect} from "effector/compat";
import {getRepositories} from "../api";
import {createStore} from "effector";

export type RepositoryCardType = {
    id: string,
    name: string,
    stargazerCount: number,
    url: string
    owner: {
        id: string,
        login: string
    }
    defaultBranchRef: {
        target: {
            history: {
                nodes: { committedDate: string }[]
            }
        }
    }
}

export const fetchRepositoriesFx = createEffect<{
    name?: string,
    page?: number,
    login?: string
}, RepositoryState, Error>(async ({name = "", page, login}) => {
    const userQuery = (login && !name) ? `user:${login}` : ""
    const after = page > 1 ? btoa(String(`cursor:${(page - 1) * 10}`)) : ""
    const variables = {
        query: `sort:updated ${name} in:name ${userQuery}`,
        first: 10,
        after: after,
    }
    return await getRepositories(variables)
})

export type RepositoryState = {
    pageInfo?: {
        endCursor: string
        startCursor: string
        hasNextPage: boolean
        hasPreviousPage: boolean
    }
    repos?: { repo: RepositoryCardType }[]
    repositoryCount?: number
}

export const $searchData = createStore<RepositoryState>({})
    .on(fetchRepositoriesFx.doneData, (_, payload) => payload)