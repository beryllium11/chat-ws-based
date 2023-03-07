import { type IMessage } from './message/Message'

interface IFetchMessageData {
  userId: number
  userName: string
  message: string
  photo?: string
}

export function mapFetchedMessages (fetchedMessages: IFetchMessageData[], date: string): IMessage[] {
  return fetchedMessages.map((fm, index) => {
    return { authorName: fm.userName, date, userId: fm.userId, message: fm.message, avatar: fm.photo, id: fm.userId.toString() + index.toString() }
  })
}
