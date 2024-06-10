import './App.css'

import { useState } from 'react'
import Layout from './components/Layout/Layout'
import SearchBar from './components/SearchBar/SearchBar'
import TasksList from './components/TaskList/TaskList'
import { Task } from './types'

const todos: Task[] = [
  {
    id: 1,
    title: 'Tarea1',
    description: 'Descripcion',
    completed: true,
  },
  {
    id: 2,
    title: 'Tarea2',
    description: 'Descripcion',
    completed: true,
  },
  {
    id: 3,
    title: 'Tarea3',
    description: 'Descripcion',
    completed: true,
  },
  {
    id: 4,
    title: 'Tarea4',
    description: 'Descripcion',
    completed: true,
  },
  {
    id: 5,
    title: 'Tarea5',
    description: 'Descripcion',
    completed: true,
  },
]

function App() {
  const [filter, setFilter] = useState('')

  return (
    <Layout>
      <SearchBar onSearch={(value: string) => setFilter(value)} />
      <TasksList tasks={todos} filter={filter} />
      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
