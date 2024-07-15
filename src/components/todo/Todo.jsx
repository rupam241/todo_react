import React, { useRef, useState,useEffect } from 'react';
import './todo.css';
import TodoItem from '../todo_items/TodoItem';

function Todo() {
    let inputRef = useRef(null);
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]

    );

    const handleSubmit = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),  // Fixed: Corrected Date.now()
            text: inputText,
            isComplete: false,
        };

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    };
    const deleteTodo=(id)=>{

        setTodoList((prevTodo)=>{
             return prevTodo.filter((todo)=>todo.id !==id)

        })

    }

    const toggle=(id)=>{
        setTodoList((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id==id){
                    return{...todo,isComplete:!todo.isComplete}
                }

                return todo;

            })
        })

    }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])
    return (
        <div className="container">
            <div className="title">
                <h1>To-Do List</h1>
            </div>

            <div className="inputField">
                <input type="text" ref={inputRef} placeholder="Add your task" />
                <button onClick={handleSubmit}>Add+</button>
            </div>

            {todoList.map((item, index) => {
                return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>;  // 
            })}
        </div>
    );
}

export default Todo;
