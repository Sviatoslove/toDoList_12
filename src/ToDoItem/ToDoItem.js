import React from "react";
import './ToDoItem.scss'

const ToDoItem = props => {
 return(
  <div className="todo-item">
   <p className='description'>{props.description}</p>
   <input type="checkbox" defaultChecked={props.completed}/>
  </div>
 )
}

export default ToDoItem;