
//import './App.css';
import {TodoCounter} from  './TodoCounter';
import{TodoSearch} from './TodoSearch';
import{TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {description: 'Aprender React Native', completed : false},
  {description: 'Aprender Angular', completed : false},
  {description: 'Aprender Vue', completed : false},
]


function App() {
  return (
    <>  
      <TodoCounter/> 
      
      <TodoSearch/>
      
      <TodoList>
        {todos.map((todo) => (     
          <TodoItem key= {todo.description} text = {todos.description}/>
        ))}
        
      </TodoList>


      
  <CreateTodoButton></CreateTodoButton> 
      
    </>  
  );
}

export default App;

