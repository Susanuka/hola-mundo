import { FC } from 'react'
import { Task } from '../../types'

export interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="card">
      <h3>
        {task.id}-{task.title}
      </h3>
      <p>{task.description}</p>
      <p>{task.completed ? 'Completada' : 'Pendiente'}</p>
    </div>
  )
}

export default TaskCard
