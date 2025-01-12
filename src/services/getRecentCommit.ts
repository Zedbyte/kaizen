export type GithubRecentCommitType = {
    repository_name: string
    commit_message?: string
    created_at: string
}

export type GithubEventType = {
    id: string
    type: string
    public: boolean
    created_at: string
    actor: {
    id: number
    login: string
    display_login: string
    gravatar_id: string
    url: string
    avatar_id: string
    }
    repo: {
    id: number
    name: string
    url: string
    }
    payload: {
    ref: string
    ref_type?: string
    master_branch?: string
    description?: string
    pusher_type?: string
    repository_id?: number
    push_id?: number
    size?: number
    distinct_size?: number
    head?: string
    before?: string
    commits?: {
        sha: string
        author: {
        email: string
        name: string
        }
        message: string
        distinct: boolean
        url: string
    }[]
    }
}[]


export default async function getGithubRecentCommit() {
    const data = await fetch('https://api.github.com/users/hyoaru/events')
        .then((res) => res.json() as Promise<GithubEventType>)
        .then((events) => events.filter((event) => event.type === 'PushEvent')?.[0])
        .then((recentPushEvent) => {
        const commits = recentPushEvent.payload.commits
        const data: GithubRecentCommitType = {
            repository_name: recentPushEvent.repo.name,
            commit_message: commits?.[commits.length - 1]?.message,
            created_at: recentPushEvent.created_at,
        }
        return data
        })

    return data
}