import React, { useState } from 'react'
import { MessageList } from './messageList/MessageList'
import { MessageForm } from './messageForm/MessageForm'
import lightBackground from '../assets/background2.jpeg'
import darkBackground from '../assets/background.jpg'
import { ThemeController } from './ui/ThemeController'
import { LOCAL_STORAGE, storage } from '../utils/storage'
import styled, { css } from 'styled-components'

interface MainPageStyleType {
  isDarkTheme: boolean
}

export const MainPage = (): JSX.Element => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(storage.getItem(LOCAL_STORAGE.isDarkTheme))

  const onControllerChange = (): void => {
    const isDarkTheme: boolean = storage.getItem(LOCAL_STORAGE.isDarkTheme)
    if (isDarkTheme) {
      storage.removeItem(LOCAL_STORAGE.isDarkTheme)
      setIsDarkTheme(false)
    } else {
      storage.setItem(LOCAL_STORAGE.isDarkTheme, true)
      setIsDarkTheme(true)
    }
  }

  return (
        <MainPageStyled isDarkTheme={isDarkTheme}>
            <ThemeController isDarkTheme={isDarkTheme} onChange={onControllerChange}/>
            <MessageList isDarkTheme={isDarkTheme}/>
            <MessageForm/>
        </MainPageStyled>
  )
}

const MainPageStyled = styled.div<MainPageStyleType>`
  display: flex;
  width: 700px;
  flex-direction: column;
  background-image: url(${lightBackground});
  padding: 15px 10px;
  ${(props) => {
    if (props.isDarkTheme) {
      return css`
        background-image: url(${darkBackground});
        * {
          color: #ccc;
        },
      `
    }
}}
`
