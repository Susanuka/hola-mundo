import { FC } from 'react'

export interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div>
      <label htmlFor="text">Filtrar</label>
      <input id="text" type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Buscar..." />
    </div>
  )
}

export default SearchBar
