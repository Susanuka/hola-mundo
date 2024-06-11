import { FC } from 'react'
import useTaskUtils from '../../hooks/useTasksUtils'
import { Task } from '../../types'
import TaskCard from '../TaskCard/TaskCard'

export interface TasksListProps {
  tasks: Task[]
  filter?: string
  onTaskEdited: (value: Task) => void
}

const TasksLists: FC<TasksListProps> = ({ tasks, filter, onTaskEdited }) => {
  const { filterTasks } = useTaskUtils()
  const filteredTasks = filterTasks(tasks, filter)

  return (
    <>
      {filter && (
        <p>
          {filteredTasks.length} encontradas, filtrando por la palabra: {filter}
        </p>
      )}
      {!filter && <p>sin filtro</p>}
      {filteredTasks.map((todo: Task) => (
        <TaskCard task={todo} key={`task-${todo.id}`} onTaskEdited={onTaskEdited} />
      ))}
    </>
  )
}

export default TasksLists
