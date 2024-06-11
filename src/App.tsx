import './App.css'

import { Task, TaskWithoutId } from './types'

import { useState } from 'react'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import Layout from './components/Layout/Layout'
import SearchBar from './components/SearchBar/SearchBar'
import TasksLists from './components/TasksList/TasksList'

const allTasks: Task[] = [
  {
    id: 1,
    title: 'Hacer la compra',
    description: 'Comprar pan, leche y huevos',
    completed: false,
  },
  {
    id: 2,
    title: 'Ir al gimnasio',
    description: 'Hacer una hora de pesas',
    completed: true,
  },
  {
    id: 3,
    title: 'Estudiar inglés',
    description: 'Repasar los verbos irregulares',
    completed: false,
  },
]

function App() {
  const [filter, setFilter] = useState('')
  const [tasks, setTasks] = useState(allTasks)

  const handleTaskCreated = (task: TaskWithoutId) => {
    const newTask: Task = {
      id: tasks.length + 1,
      ...task,
    }
    setTasks([...tasks, newTask])
  }

  const handleTaskEdited = (task: Task) => {
    setTasks((prevTasks) => prevTasks.map((item) => (item.id === task.id ? { ...allTasks, ...task } : item)))
  }

  return (
    <Layout>
      <SearchBar onSearch={(value: string) => setFilter(value)} />
      <TasksLists tasks={tasks} filter={filter} onTaskEdited={handleTaskEdited} />
      <CreateTaskForm onTaskCreated={handleTaskCreated} />
    </Layout>
  )
}

export default App
