import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}


function sayHello() {
    console.log("Hello!");
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>  {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => { 
            // action.payload is the id of the todo to be removed
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo:(state, action) => {
            const { id, text } = action.payload;
            // action.payload is an object with id and text properties
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;
