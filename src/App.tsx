import './App.css'

import Layout from './components/Layout/Layout'
import TaskCard from './components/TaskCard/TaskCard'
import { Task } from './types'

function App() {
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

  return (
    <Layout>
      <div>Contenido de la aplicación</div>
      {todos.map((task) => (
        <TaskCard key={`task-${task.id}`} task={task} />
      ))}
    </Layout>
  )
}

export default App
