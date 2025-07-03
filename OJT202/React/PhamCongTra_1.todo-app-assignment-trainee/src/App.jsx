import { useState } from 'react'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'

function App() {
  const [list, setList] = useState([
    { text: 'Học react', completed: true },
    { text: 'Học java', completed: false },
    { text: 'Học angular', completed: false },
    { text: 'Học .Net', completed: true },
  ])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <p className="text-center mb-1">
        Let's add what you have to do!
      </p>
      <p className="text-center mb-4">
        Fill the input and click button or "Enter" to add a new task into the list.<br />
        To mark as completed, just click directly to the task
      </p>

      <TodoAdd list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  )
}

export default App
