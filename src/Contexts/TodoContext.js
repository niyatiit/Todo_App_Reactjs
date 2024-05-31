import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "Todo Messages",
            completed: false,
        }
    ],
    addTodo : (todo) =>{},
    updatTodo : (id,todo) =>{},
    deleteTodo : (id) =>{},
    toggleComplete : (id) =>{}
})


/* Now you are using this variable TodoContext so using the useConstecxt  */
export const useTodo = () =>{
    return useContext(TodoContext)
}

/* now this context is export with provider because this is using directly with every file */
export const TodoProvider = TodoContext.Provider



// import {createContext, useContext} from "react"

// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo: " Todo msg",
//             completed: false,
//         }
//     ],
//     addTodo: (todo) => {},
//     updateTodo: (id, todo) => {},
//     deleteTodo: (id) => {},
//     toggleComplete: (id) => {}
// })


// export const useTodo = () => {
//     return useContext(TodoContext)
// }

// export const TodoProvider = TodoContext.Provider