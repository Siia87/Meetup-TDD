import { IComment } from "./comments";
export interface IMeetups {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string //YYYY-mm-dd
  time: string
  comments: IComment[]
  attending: number
}
