import React, {useState} from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import "./styles/chaosTodo.css"

export default function ChaosTodo() {
    const [todoList, setTodoList] = useState([{id: `1` ,content: `Fill car`, status: false}])


    let todosDisp = todoList.map(todo => 
        <Todo content={todo.content} />
    )

    return (
        <div className='ChaosTodo'>
            <NewTodoForm />
            <div>
                {todosDisp}
            </div>
        </div>
    )
}
