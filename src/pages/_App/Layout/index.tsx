import React from 'react'
import { useMemo } from 'react'
import { MainMenu } from '../MainMenu'
import { LayoutStyled, LayoutContentStyled } from './styles'

export const Layout: React.FC = ({ children, ...other }) => {
  return useMemo(() => {
    return (
      <LayoutStyled {...other}>
        <MainMenu></MainMenu>

        <LayoutContentStyled>{children}</LayoutContentStyled>
      </LayoutStyled>
    )
  }, [children, other])
}
