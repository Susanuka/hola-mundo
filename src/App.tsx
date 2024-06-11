import { useContext, useEffect } from 'react'
import './App.css'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import Layout from './components/Layout/Layout'
import SearchBar from './components/SearchBar/SearchBar'
import { SearchBarContextProvider } from './components/SearchBar/SearchBarContext'
import { TasksContext } from './components/TasksContext/TasksContext'
import TasksLists from './components/TasksList/TasksList'

function App() {
  const { loadTasks } = useContext(TasksContext)
  useEffect(() => {
    loadTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <SearchBarContextProvider>
        <>
          <SearchBar />
          <TasksLists />
        </>
      </SearchBarContextProvider>
      <CreateTaskForm />
    </Layout>
  )
}

export default App
