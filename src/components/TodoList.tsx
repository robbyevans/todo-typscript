import React, { FC, useState } from 'react'
import './TodoList.css';

interface Props {}


const TodoList: FC<Props> = () => {

  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState<string[]>([]);

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(newTodo!==""){
      setTodo([...todo,newTodo]);
      setNewTodo('')
    }
    else{
      return alert("Enter a valid task");
   
      
    }
  }
  const handleDelete=(index:number)=>{
    const newTodo=[...todo];
    newTodo.splice(index,1)
    setTodo(newTodo)

  }
  return (
    <div className='todoList'>
     <form className='formControl' onSubmit={handleSubmit} >
      <input
      type='text'
      placeholder='Enter new task...'
      value={newTodo}
      onChange={(e)=>{setNewTodo(e.target.value)}}/>
      <button type='submit'>ADD</button>
     </form>
     <div className='todoList'>
      {todo.map((task,index)=>
          <div key={index} >{index+1} .{task}
          <button onClick={()=>handleDelete(index)}>X</button></div>
        )
      }
      
     </div>
    </div>
  )
}

export default TodoList;