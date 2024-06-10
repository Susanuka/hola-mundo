import { FC } from 'react'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'

export interface TasksListProps {
  tasks: Task[]
  filter: string
}

const TasksList: FC<TasksListProps> = ({ tasks, filter }) => {
  const tasksFiltered = filter
    ? tasks.filter((task) => task.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    : [...tasks]

  return (
    <>
      {/* esto es un nodo "vacio" */}
      {tasksFiltered.map((task: Task) => (
        <TaskCard key={`task-${task.id}`} task={task} />
      ))}
    </>
  )
}

export default TasksList
