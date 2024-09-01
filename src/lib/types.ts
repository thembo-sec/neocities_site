export type Categories = 'code' | 'cyber' | 'fashion' | 'arts'

export type Post = {
    title: string,
    categories: Categories[]
    description: string
    slug: string
    date: string
    edited: string
    published: boolean
}