import { Task } from '../types'

const filterTasks = (tasks: Task[], filter: string): Task[] => {
  return filter
    ? tasks.filter((task) => task.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    : [...tasks]
}

const useTaskskUtils = () => {
  return {
    filterTasks,
  }
}

export default useTaskskUtils
