import { FC } from 'react'
import { Task } from '../../types'
import css from './TaskCard.module.css'

export interface TaskCardProps {
  task: Task
  onTaskEdited: (value: Task) => void
}

const TaskCard: FC<TaskCardProps> = ({ task, onTaskEdited }) => {
  const handleOnClick = () => {
    task.completed = !task.completed
    onTaskEdited(task)
  }

  return (
    <div className={`${css.card} ${task.completed ? css.completed : css.incomplete}`}>
      <div className={css.check}>
        <input type="checkbox" checked={task.completed} onClick={handleOnClick} />
      </div>
      <div className={css.info}>
        <div className={css.title}>{task.title}</div>
        {task.description && <div className={css.description}>{task.description}</div>}
      </div>
    </div>
  )
}

export default TaskCard
