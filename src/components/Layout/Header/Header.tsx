import { FC } from 'react'

interface HeaderProps {
  title: string
  subtitulo: string
}

const Header: FC<HeaderProps> = ({ title, subtitulo }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h1>{subtitulo}</h1>
    </header>
  )
}

export default Header
