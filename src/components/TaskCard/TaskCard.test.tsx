import { render } from '@testing-library/react'
import TaskCard from './TaskCard'

describe('TaskCard', () => {
  it('renderiza el componente', () => {
    render(<TaskCard task={{ id: 1, title: 'Task 1', description: 'Descripcion', completed: true }}></TaskCard>)
  })
  it('renderiza el titulo de la tarea', () => {
    const { getByText } = render(
      <TaskCard task={{ id: 1, title: 'Task 1', description: 'Descripcion', completed: true }}></TaskCard>,
    )
    expect(getByText('Task 1')).toBeInTheDocument()
  })
})
