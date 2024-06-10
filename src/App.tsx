import './App.css'

import { useState } from 'react'
import Layout from './components/Layout/Layout'
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
  const [text, setText] = useState('')
  const [tasksFiltered, setTasksFiltered] = useState<Task[]>(todos)

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value
    setText(newText)

    const filteredTasks = todos.filter((task: Task) =>
      task.title.toLocaleLowerCase().includes(newText.toLocaleLowerCase()),
    )

    setTasksFiltered(filteredTasks)
  }

  return (
    <Layout>
      <label htmlFor="text">Filtrar</label>
      <input id="text" type="text" value={text} onChange={filter} placeholder="Buscar..." />
      <TasksList tasks={tasksFiltered} />
      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
