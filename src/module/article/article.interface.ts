export interface ICreateArticle {
  title: string
  content: string
  tags: Array<number>
}

interface TagId {
  id: number
}

export interface ArticleInstance {
  title: string
  content: string
  tags: Array<TagId>
}