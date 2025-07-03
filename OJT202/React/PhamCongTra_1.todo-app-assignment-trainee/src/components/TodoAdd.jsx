import { useRef } from 'react'

const TodoAdd = ({ list, setList }) => {
  const inputRef = useRef()

  const handleAdd = () => {
    const value = inputRef.current.value.trim()
    if (value === '') return
    setList([...list, { text: value, completed: false }])
    inputRef.current.value = ''
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="flex items-center gap-2 w-full max-w-md ">
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className="flex-grow border-2  border-[#FBBF24] rounded px-3 py-2 focus:outline-none"
      />
      <button
        onClick={handleAdd}
        className="bg-[#10B981] text-white px-5 py-1.5 rounded text-2xl cursor-pointer"
      >
        +
      </button>
    </div>
  )
}

export default TodoAdd
