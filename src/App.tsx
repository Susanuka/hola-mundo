import './App.css'

import Layout from './components/Layout/Layout'
import TaskCard from './components/TaskCard/TaskCard'
import { Task } from './types'

function App() {
  const todo: Task = {
    id: 1,
    title: 'Tarea1',
    description: 'Descripcion',
    completed: true,
  }

  return (
    <Layout>
      <div>Contenido de la aplicación</div>
      <TaskCard task={todo}></TaskCard>
    </Layout>
  )
}

export default App
