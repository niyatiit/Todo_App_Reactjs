// import { TodoProvider } from "./Contexts/TodoContext"
// import './App.css'
// import { useEffect, useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoItem from "./components/TodoItem"

// function App() {
//   const [todos, setTodos] = useState([])

//   // Adding the Todo in the App 
//   const addTodo = (todo) => {
//     setTodos(prev => [{ id: Date.now(), ...todo }, ...prev])
//   }


//   // Updateing tthe Todo in the App
//   const updateTodo = (id, todo) => {
//     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
//   }


//   /*  UPDATING TODO UNOTHER WAY  */

//   const updateTodo1 = (id, todo) => {
//     setTodos((prev) => {
//       prev.map((eachId) => {
//         if (eachId.id === id) {
//           todo;
//         }
//         else {
//           prevTodo
//         }
//       })
//     })
//   }


//   // Delete the Todo in the App

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id))
//   }


//   // Toggle Completed the Todo in the App
//   const toggleCompleted = (id) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo))
//   }

//   /* 1) when you are load the application so it's give the all Todos  */
//   useEffect(() => {

//     const todos = JSON.parse(localStorage.getItem("todos"))

//     if (todos && todos.length > 0) {
//       setTodos(todos)
//     }
//   }, [])


//   /* 2) This is using the Stored the All Value  */
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }, [todos])


//   return (
//     <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//           <div className="mb-4">
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {
//               todos.map((todo) => {
//                 <div key={todo.id}
//                   className='w-full'>
//                   <TodoItem todo={todo} />
//                 </div>
//               })
//             }
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   )
// }

// export default App



import { useState, useEffect } from 'react'
import {TodoProvider} from './Contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App