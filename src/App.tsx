import React ,{useState}from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';
const App: React.FC = () => {

  const [todos,setTodo]=useState<Todo[]>([]);
  // const todos = [{id: 't1', text: 'Finish the course'}]; 
  const todoHandler = (text:string)=>{
    setTodo([{id:Math.random().toString(),text:text}]);
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoHandler}/>
      <TodoList items ={todos}/>
    </div>
  );
}
export default App;
