import React from "react"
function Todo(props){
    

    return (
     <div className="border border-warning border-1 p-2 m-2">
     <li style={{listStyle:"none"}} >
      <span style={props.t.status ? {textDecoration:"line-through"}:{}}>{props.t.title}</span>
     <button className={(props.t.status) ? "btn btn-success":"btn btn-info text-white"} onClick={()=>{props.toggle(props.t.id)}}>{(props.t.status) ? "undo" :"done"}</button>
     <button  className="btn btn-danger m-1"onClick={()=>{props.del(props.t.id)}}>Delete</button>
     </li>
    </div>
);
}
export default Todo;