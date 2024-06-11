import { FC, PropsWithChildren, createContext, useState } from 'react'
import useTasksApi from '../../hooks/useTasksApi'
import { Task, TaskWithoutId } from '../../types'

interface TaskContextType {
  tasks: Task[]
  addTask: (task: TaskWithoutId) => void
  updateTask: (task: Task) => void
  loadTasks: () => void
}

export const TasksContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  loadTasks: () => {},
})

const TaskContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const api = useTasksApi()

  const loadTasks = () => api.getTasks().then((tasks) => setTasks(tasks))
  const addTask = (task: TaskWithoutId) => api.postTask(task).then((newTask) => setTasks([...tasks, newTask]))
  const updateTask = (task: Task) =>
    api.putTask(task).then((updatedTask) => setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))))
  return <TasksContext.Provider value={{ tasks, addTask, updateTask, loadTasks }}>{children}</TasksContext.Provider>
}

export default TaskContextProvider
