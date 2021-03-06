import React from 'react';
import './App.css';
import TodoList from './Todo/TododList'
import Context from './context'
import AddTodo from './Todo/AddTodo';

function App() {
  let [todos, setTodos] = React.useState(
    [
      {id: 1, completed: false, title: 'Купить масло'},
      {id: 2, completed: false, title: 'Купить хлеб'},
      {id: 3, completed: false, title: 'Купить молоко'}
    ]
  )

  
  function toggleTodo(id) {
    setTodos(
      todos = todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed:false
      }
    ]))
  }

  return(
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
      <h1>Todo List in react</h1>
      <AddTodo onCreate={addTodo}/>
      {todos.length ? <TodoList todos = {todos} onToggle = {toggleTodo}/> : <h1>No todos</h1>}
    </div>
    </Context.Provider>
  )
}

export default App;
