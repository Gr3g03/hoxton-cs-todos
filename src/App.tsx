import { useEffect, useState } from 'react'
import './App.css'

type Todos = {

  userId: number,
  id: number,
  title: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todos[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(todos => setTodos(todos))
  }, [])


  return (
    <div className="App">

      <h1>TODOS</h1>

      <form>
        <input type="text" placeholder='Add a quote' />
        <button>Add</button>
      </form>

      <ul>
        {
          todos.map(todo =>
            <li key={todo.id}>
              {todo.title} <button>x</button>
            </li>
          )}
      </ul>

    </div>
  )
}

export default App
