import React, {useState} from 'react';

function ToDoFunction(props){
    const [item, setItem] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const list = [...todoList, item];
        setTodoList(list);
    }

    const currentTodos = todoList.map(
        (todo,index)=>
            <p key={index}>
                {todo}
            </p>
    );

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                id="todoitem"
                value={item}
                onChange={(e)=>{setItem(e.target.value)}}
                placeholder='What to do?'
            />
            <button type="submit">
                Add
            </button>
            {currentTodos}
        </form>
    );
};

export default ToDoFunction;