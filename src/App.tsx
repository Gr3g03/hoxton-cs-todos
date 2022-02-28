import { useEffect, useState } from 'react'
import './App.css'

type Todos = {

  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todos[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(todos => setTodos(todos))
  }, [])


  function removeTodo(id: number): void {
    const updateTodo = todos.filter(todo => todo.id !== id)
    setTodos(updateTodo)
  }

  function addNewTodo(title: string) {
    const newTodo: Todos = {
      userId: 1,
      id: todos.length + 1,
      title: title,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }


  return (
    <div className="App">

      <h1>TODOS</h1>

      <form onSubmit={(e) => {
        e.preventDefault()
        addNewTodo(e.target.text.value)
        e.target.reset()
      }}>
        <input type="text" name='text' placeholder='Add a quote' />
        <button>Add</button>
      </form>

      <ul>
        {
          todos.map(todo =>
            <li key={todo.id}>
              {todo.title} <button onClick={() => { removeTodo(todo.id) }}>x</button>
            </li>
          )}
      </ul>

    </div>
  )
}

export default App
