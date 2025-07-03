import { useState } from 'react'


const TodoList = ({ list, setList }) => {
  const [filter, setFilter] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredList = list.filter(todo => {
    if (filter === 'All') return true
    if (filter === 'Active') return !todo.completed
    if (filter === 'Completed') return todo.completed
  })

  const toggleComplete = (indexInFiltered) => {
    const item = filteredList[indexInFiltered]
    const realIndex = list.indexOf(item)
    const updated = [...list]
    updated[realIndex].completed = !updated[realIndex].completed
    setList(updated)
  }

  const deleteTodo = (indexInFiltered) => {
    const item = filteredList[indexInFiltered]
    const realIndex = list.indexOf(item)
    const updated = [...list]
    updated.splice(realIndex, 1)
    setList(updated)
  }

  return (
    <div className="min-h-[350px] mt-6 bg-[#FEF3C7] rounded-lg p-4 w-full max-w-md shadow">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-orange-300">List:</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-orange-300 bg-white rounded px-2 py-1 text-sm"
        >
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="space-y-2">
        {filteredList.map((todo, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex items-center justify-between group px-2 pb-2 border-b border-yellow-400 cursor-pointer"
          >
            <span
              onClick={() => toggleComplete(index)}
              className={`flex-1 ${
                todo.completed ? 'line-through text-[#9CA3AF]' : 'text-[#000]'
              }`}
            >
              {index + 1}. {todo.text}
            </span>

            {hoveredIndex === index && (
              <button
                onClick={() => deleteTodo(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
