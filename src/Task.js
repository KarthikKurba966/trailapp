
import { useState } from 'react';
import TaskList from './TaskList';

export const Task =()=>{
    

    const[task,seTask]=useState("")
    const [todos,setTodos]=useState([]);

  const onChangeHandler =(e)=>{
    seTask(e.target.value);

    }

    const submitHandler=(e)=>{
        e.preventDefault();
       const newTodos = [...todos,task]
       setTodos(newTodos);
       seTask("")
    }


    const deletHandler =(indexValue)=>{
        const newTodos =todos.filter((todo,index)=>index !==indexValue);
        setTodos(newTodos);

    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" name="text" value={task} onChange={onChangeHandler} />
            <input type="submit" name="Add" />
        </form>

       <TaskList todos={todos} deletHandler={deletHandler}/>
       </>

    )
  
}