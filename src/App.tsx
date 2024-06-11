import './App.css'

import { useReducer, useState } from 'react'
import { Task, TaskWithoutId } from './types'

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

enum TaskAction {
  'CREATE',
  'UPDATE',
}

interface TaskReducerAction {
  command: TaskAction
  task: Task | TaskWithoutId
}

function App() {
  const [filter, setFilter] = useState('')

  const taskReducer = (state: Task[], action: TaskReducerAction): Task[] => {
    switch (action.command) {
      case TaskAction.CREATE:
        return [...state, { ...action.task, id: state.length + 1, completed: false }]
      case TaskAction.UPDATE:
        return state.map((task) =>
          task.id === (action.task as Task).id ? { ...task, ...(action.task as Task) } : task,
        )
      default:
        return state
    }
  }

  const [tasks, dispatch] = useReducer(taskReducer, allTasks)

  const handleTaskCreated = (task: TaskWithoutId) => {
    dispatch({ command: TaskAction.CREATE, task })
  }

  const handleTaskEdited = (task: Task) => {
    dispatch({ command: TaskAction.UPDATE, task })
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
