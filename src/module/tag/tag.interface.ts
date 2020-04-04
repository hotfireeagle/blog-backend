export interface ITag {
  id: number
  name: string
}

export type ITagWN = Pick<ITag, 'name'>
