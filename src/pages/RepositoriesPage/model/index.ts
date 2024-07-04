import {createEffect} from "effector/compat";
import {getRepositories} from "../api";
import {createStore} from "effector";

export type RepositoryCard = {
    id: string,
    name: string,
    stargazerCount: number,
    url: string
    defaultBranchRef: {
        target: {
            history: {
                nodes: { committedDate: string }[]
            }
        }
    }
}

export const fetchRepositoriesFx = createEffect<{
    user: string,
    name?: string,
    page?: number
}, RepositoryState, Error>(async (params) => {
    return await getRepositories()
})

export type RepositoryState = {
    pageInfo?: {
        endCursor: string
        startCursor: string
        hasNextPage: boolean
        hasPreviousPage: boolean
    }
    repos?: { repo: RepositoryCard }[]
    repositoryCount?: number
}

export const $searchData = createStore<RepositoryState>({})
    .on(fetchRepositoriesFx.doneData, (_, payload) => payload)