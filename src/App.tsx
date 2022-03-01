import { useEffect, useState } from 'react'
import './App.css'

// type Todos = {

//   userId: number,
//   id: number,
//   title: string,
//   completed: boolean
// }


export type Todos = {
  id: number
  title: string
}

export function addTodo(todos: Todos[], title: string) {
  const newTodo = { id: todos.length + 1, title: title }
  return [...todos, newTodo]
}

export function removeTodo(todos: Todos[], id: number) {
  return todos.filter(todo => todo.id !== id)
}


function App() {
  const [todos, setTodos] = useState<Todos[]>([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(resp => resp.json())
  //     .then(todos => setTodos(todos))
  // }, [])


  // function removeTodo(id: number): void {
  //   const updateTodo = todos.filter(todo => todo.id !== id)
  //   setTodos(updateTodo)
  // }

  // function addNewTodo(title: string) {
  //   const newTodo: Todos = {
  //     userId: 1,
  //     id: todos.length + 1,
  //     title: title,
  //     completed: false
  //   }
  //   setTodos([newTodo, ...todos])
  // }


  return (
    <div className="App">

      <h1>TODOS</h1>

      <form onSubmit={(e) => {
        e.preventDefault()
        //@ts-ignore
        const updatedTodo = addTodo(todos, e.target.text.value)
        //@ts-ignore
        e.target.reset()
        setTodos(updatedTodo)
      }}>
        <input type="text" name='text' placeholder='Add a quote' />
        <button>Add</button>
      </form>

      <ul>
        {
          todos.map(todo =>
            <li key={todo.id}>
              {todo.title} <button onClick={() => {
                const updatedTodo = removeTodo(todos, todo.id)
                setTodos(updatedTodo)
              }}>x</button>
            </li>
          )}
      </ul>

    </div>
  )
}

export default App
