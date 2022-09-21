import React from "react";
import './ToDoItem.scss'

const ToDoItem = props => {
 const resolvedClass = {
  textDecoration: 'line-through'
 }
 return(
  <div className='todo-item'>
   <p className='description' style={props.completed === true ? resolvedClass : {}}>{props.description}</p>
    <input
     type="checkbox"
     defaultChecked={props.completed}
     onChange={props.handleChange}
    />
    <button className="btn__delete" onClick={props.deleteTodosItem}></button>
  </div>
 )
}

export default ToDoItem;