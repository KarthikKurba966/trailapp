import React from 'react'

const TaskList = ({todos,deletHandler}) => {

  return (
    <div>
    {todos.map((todo,index)=>
    <div key={todo.index}>
        <h1>{todo} &nbsp; <button onClick={()=>deletHandler(index)}>Delete</button></h1>


        </div>

    )}
    </div>
  )
}

export default TaskList;
