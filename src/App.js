import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import NewTask from './components/NewTask';

function App() {
  const [todos, setTodos] = useState([]);
  const newTodo = (title) => {
    const todo = {
      title : title,
      done : false
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <Header></Header>
      <NewTask getTaskTitle={newTodo}></NewTask>
    </div>
  );
}

export default App;
