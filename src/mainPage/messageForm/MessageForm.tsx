import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormHelperText, TextField } from '@mui/material'
import styled from 'styled-components'
import { chatWS } from '../../webSocket/chatWS'

export const MessageForm = (): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [isStatusReady, setIsStatusReady] = useState<boolean>(false)

  useEffect(() => {
    chatWS.addEventListener('open', () => {
      setIsStatusReady(true)
    })
  }, [])

  const onSendMessage = (): void => {
    chatWS.send(value)
    setValue('')
  }

  return (
            <FormWrapper>
                <FormControl sx={{ width: 350 }}>
                    <TextFieldStyled multiline
                                     minRows={2}
                                     maxRows={5}
                                     value={value}
                                     id="my-input"
                                     placeholder="Type message here"
                                     onChange={(e) => { setValue(e.currentTarget.value) }}
                                     variant="filled"
                                     aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">Think twice before send.</FormHelperText>
                    <Button variant="contained" disabled={!isStatusReady} onClick={onSendMessage}>Send</Button>
                </FormControl>
            </FormWrapper>
  )
}

const TextFieldStyled = styled(TextField)`
  background-color: rgba(255, 255, 255, 0.7);
  textarea {
    font-size: 14px;
  }
`
const FormWrapper = styled.div`
  padding-top: 15px;
  border-top: 2px inset;
`
