import React from 'react'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'

interface Props {
  onChange: () => void
  isDarkTheme: boolean
}

export const ThemeController = ({ onChange, isDarkTheme }: Props): JSX.Element => {
  const handleChange = (): void => {
    onChange()
  }

  return (
    <FormGroup sx={{ display: 'inline-block' }}>
      <FormControlLabel control={<Switch onChange={handleChange}
                                         defaultChecked={isDarkTheme} />}
                        label="Dark theme"
                        labelPlacement="top" />
    </FormGroup>
  )
}
