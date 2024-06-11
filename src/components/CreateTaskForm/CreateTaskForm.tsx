import { FC, useId } from 'react'

import { TaskWithoutId } from '../../types'
import css from './CreateTaskForm.module.css'

export interface CreateTaskFormProps {
  onTaskCreated: (value: TaskWithoutId) => void
}

const CreateTaskForm: FC<CreateTaskFormProps> = ({ onTaskCreated }) => {
  const id = useId()

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    e.preventDefault()
    const task: TaskWithoutId = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      completed: false,
    }
    onTaskCreated(task)
  }

  return (
    <form className={css.form} onSubmit={handleForm}>
      <label id={`${id}-title`}>Título</label>
      <input type="text" aria-describedby={`${id}-title`} placeholder="Titulo..." name="title"></input>
      <label id={`${id}-description`}>Descripción</label>
      <textarea aria-describedby={`${id}-description`} placeholder="Descripcion..." name="description"></textarea>
      <button type="submit">Crear tarea</button>
    </form>
  )
}

export default CreateTaskForm
