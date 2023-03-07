import React, { useEffect, useState } from 'react'
import { Divider, List } from '@mui/material'
import { type IMessage, Message } from '../message/Message'
import { mapFetchedMessages } from '../mapFetchMessagesWS'
import styled from 'styled-components'
import { chatWS } from '../../webSocket/chatWS'

interface Props {
  isDarkTheme: boolean
}

export const MessageList = ({ isDarkTheme }: Props): JSX.Element => {
  const [chatData, setChatData] = useState<IMessage[]>([])
  const date = new Date().toLocaleDateString()

  useEffect(() => {
    chatWS.addEventListener('message', (e) => {
      const newMessages = mapFetchedMessages(JSON.parse(e.data), date)
      setChatData((prevState) => {
        if (prevState.find((mess) => mess.id === newMessages[0].id) != null) {
          return prevState
        } else return [...prevState, ...newMessages]
      })
    })
  }, [])

  return (
        <MessagesListWrapper>
            messages:
            <List sx={{ width: '100%' }}>
                {chatData.map((message: IMessage, index) => {
                  return (
                        <ListItem key={message.userId.toString() + index.toString()}>
                          <Message avatar={message.avatar}
                                   authorName={message.authorName}
                                   message={message.message}
                                   date={message.date}
                                   userId={message.userId}
                                   isDarkTheme={isDarkTheme}
                                   id={message.id}
                          />
                          <Divider light={isDarkTheme} variant="middle" component="li" />
                        </ListItem>
                  )
                })}

            </List>
        </MessagesListWrapper>
  )
}

const MessagesListWrapper = styled.div`
  max-height: calc(100vh - 200px);
  overflow: auto;
`
const ListItem = styled.div`
  border: 2px solid;
  border-radius: 10px;
  margin-bottom: 10px;
  background: rgba(255,255,255,0.2);
`
