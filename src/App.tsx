import React ,{useState}from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';
const App: React.FC = () => {

  const [todos,setTodo]=useState<Todo[]>([]);
  // const todos = [{id: 't1', text: 'Finish the course'}]; 
  const todoHandler = (text:string)=>{
    setTodo(prevTodos=>[...prevTodos,{id:Math.random().toString(),text:text}]);
    //The argument prevTodos is an array of existing to-do items.
    //The spread operator (...) is used to create a shallow copy of the prevTodos array. This ensures that the original array is not modified directly.
  }

  const todoDeleteHandler = (todoId:string)=>{
    setTodo(prevTodos=>{
      return prevTodos.filter(todo=>todo.id!==todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoHandler}/>
      <TodoList items ={todos} onDelete={todoDeleteHandler}/>
    </div>
  );
}
export default App;
