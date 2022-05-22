import { useState } from 'react';
import "../css/NewTask.css";
export default function NewTask({getTaskTitle}){
    const [title, setTitle] = useState("");
    const addTodo = () => {
        getTaskTitle(title);
        setTitle("");
    };
    return <div className="new-task">
        <input type="text" placeholder="Введите задачу" value={title} onChange={e => setTitle(e.target.value)}/>
        <button onClick={addTodo}>Добавить</button>
    </div>
}