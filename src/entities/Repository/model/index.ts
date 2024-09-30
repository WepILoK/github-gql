import {createEffect} from "effector/compat";
import {getRepositories, getRepositoryDetails} from "../api";
import {createEvent, createStore} from "effector";

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
    name?: string | null,
    page?: number | null,
    login?: string | null
}, RepositoryState, Error>(async ({name = "", page = 0, login}) => {
    const userQuery = (login && !name) ? `user:${login}` : ""
    const after = page && page > 1 ? btoa(String(`cursor:${(page - 1) * 10}`)) : ""
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

export type RepositoryDetailsType = {
    name: string
    description: string | null
    stargazerCount: number
    defaultBranchRef: {
        target: {
            history: {
                nodes: [
                    { committedDate: string }
                ]
            }
        }
    }
    owner: {
        login: string
        avatarUrl: string
        url: string
    }
    languages: { nodes: { name: string }[] }
}

export type RepositoryDetailsStateType = {
    repository?: RepositoryDetailsType
}

export const fetchRepositoryDetailsFx = createEffect<{
    owner: string,
    name: string,
}, RepositoryDetailsStateType, Error>(async (variables) => {
    return await getRepositoryDetails(variables)
})
export const $event = createEvent()

export const $repositoryDetail = createStore<RepositoryDetailsStateType>({})
    .on(fetchRepositoryDetailsFx.doneData, (_, payload) => payload)
    .on($event, () => {
        return {}
    })

