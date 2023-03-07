import React from 'react'
import './App.css'
import { MainPage } from './mainPage/MainPage'
import styled from 'styled-components'

function App (): JSX.Element {
  return (
    <AppStyled className="App">
      <MainPage/>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

export default App
