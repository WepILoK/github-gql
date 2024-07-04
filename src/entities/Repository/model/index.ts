export type RepositoryCard = {
    id: string,
    name: string,
    stargazerCount: number,
    url: string
    defaultBranchRef: {
        target: {
            history: {
                nodes: {committedDate: string}[]
            }
        }
    }
}