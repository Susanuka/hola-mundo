import userEvent, { UserEvent } from '@testing-library/user-event'

import { render } from '@testing-library/react'
import { TasksContext } from '../TasksContext/TasksContext'
import CreateTaskForm from './CreateTaskForm'

describe('CreateTaskCardForm', () => {
  let user: UserEvent
  beforeEach(() => {
    user = userEvent.setup()
  })
  it('renderiza el componente', () => {
    render(<CreateTaskForm></CreateTaskForm>)
  })
  it('agrega la tarea correctamente', async () => {
    const addTaskSpy = vitest.fn()
    const { getByLabelText, getByRole } = render(
      <TasksContext.Provider value={{ tasks: [], addTask: addTaskSpy, updateTask: () => {} }}>
        <CreateTaskForm />,
      </TasksContext.Provider>,
    )

    await user.type(getByLabelText('Título'), 'Nueva Tarea')
    await user.type(getByLabelText('Descripción'), 'Descripción de la nueva tarea')

    await user.click(getByRole('button'))

    expect(addTaskSpy).toHaveBeenCalledWith({
      title: 'Nueva Tarea',
      description: 'Descripción de la nueva tarea',
      completed: false,
    })
  })
})
