import React ,{useState} from 'react'

export default function NewTodoForm() {
    const [formInput, setFormInput] = useState()



    return (
        <div>
            <label htmlFor="todoInput">Todo</label>
            <input type="text" name="todoInput"></input>
            <button>Add</button>
        </div>
    )
}
