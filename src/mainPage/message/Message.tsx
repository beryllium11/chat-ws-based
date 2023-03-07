import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material'
import React from 'react'
import styled, { css } from 'styled-components'

interface OwnProps {
  isDarkTheme: boolean
}

export interface IMessage {
  userId: number
  authorName: string
  message: string
  date: string
  id: string
  avatar?: string
}

type Props = OwnProps & IMessage

export const Message = ({ message, date, authorName, avatar, userId, isDarkTheme }: Props): JSX.Element => {
  return (
    <ListItem alignItems="flex-start" sx={{
      justifyContent: 'space-between',
      flex: '1 2 auto',
      alignItems: 'flex-start',
      position: 'relative'
    }} key={userId}
    >
      <div>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={avatar} />
        </ListItemAvatar>
        <Name>{authorName}</Name>
      </div>

      <MessageWrapper isDarkTheme={isDarkTheme}>
        <Typography
          sx={{ display: 'inline' }}
          component="div"
          variant="body2"
          color="text.primary"
        >
          <p>{message}</p>
        </Typography>
        <span>{date}</span>
      </MessageWrapper>
    </ListItem>
  )
}

const MessageWrapper = styled.div<OwnProps>`
  background-color: rgba(255,255,255,0.7);
  padding: 5px 7px;
  border-radius: 5px;
  font-size: 14px;
  width: fit-content;
  min-width: 200px;
  max-width: 600px;
  p {
    margin: 3px 0;
  }
  ${(props) => {
  if (props.isDarkTheme) {
    return css`
      p, span {
      color: #444;
      } 
  `
  }
}
}
`
const Name = styled.p`
  margin: 0;
  font-size: 13px;
  position: absolute;
  left: 14px;
  top: 0;
`
