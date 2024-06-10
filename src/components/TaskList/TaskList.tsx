import { FC } from 'react'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'

export interface TasksListProps {
  tasks: Task[]
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {
  return (
    <>
      {/* esto es un nodo "vacio" */}
      {tasks.map((task) => (
        <TaskCard key={`task-${task.id}`} task={task} />
      ))}
    </>
  )
}

export default TasksList
