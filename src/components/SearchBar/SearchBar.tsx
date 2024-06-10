import { FC, useEffect, useRef } from 'react'

export interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <label htmlFor="text">Filtrar</label>
      <input ref={inputRef} id="text" type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Buscar..." />
    </div>
  )
}

export default SearchBar
