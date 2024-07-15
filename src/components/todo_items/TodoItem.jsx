import React from 'react'
import "./todoItem.css"
import notTick from "../../assets/not_tick.png";
import deleteIcon from "../../assets/delete.png"
import tick from "../../assets/tick.png"


function TodoItem({text,id,isComplete,deleteTodo,toggle}) {

  
  return (
    <>

      <div className="items">
        <div  className='
        
        Item_list' onClick={()=>{toggle(id)}}>
          <img src={ isComplete?tick:notTick} alt="" srcset="" />
          <p style={isComplete ? {textDecoration: "line-through"} : {}}>
  {text}
</p>
         
        </div>

        <img src={deleteIcon}  onClick={()=>{deleteTodo(id)}} alt="" srcset=""  className='delete'  />


      </div>





    </>
  )
}

export default TodoItem