import { FC } from 'react'

export interface HeaderProps {
  title: string
  subtitulo: string
}

const Header: FC<HeaderProps> = ({ title, subtitulo }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitulo}</h2>
    </header>
  )
}

export default Header
