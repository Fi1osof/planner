import Link from 'next/link'
import React from 'react'
import { useMemo } from 'react'
import { MainMenuStyled } from './styles'

export const MainMenu: React.FC = () => {
  return useMemo(() => {
    return (
      <MainMenuStyled>
        <Link href="/">Главная</Link>
        <Link href="/expenditureitems">Статьи расходов</Link>
      </MainMenuStyled>
    )
  }, [])
}
