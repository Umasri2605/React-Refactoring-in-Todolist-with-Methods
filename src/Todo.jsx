import React from "react"
function Todo(props){
    

    return (
     <div className="border border-warning border-2 p-2 m-2">
     <li >
      <span style={props.t.status ? {textDecoration:"line-through"}:{}}>{props.t.title}</span>
     <button className={(props.t.status) ? "btn btn-success":"btn btn-info"} onClick={()=>{props.toggle(props.t.id)}}>{(props.t.status) ? "undo" :"done"}</button>
     <button  className="btn btn-danger m-1"onClick={()=>{props.del(props.t.id)}}>Delete</button>
     </li>
    </div>
);
}
export default Todo;