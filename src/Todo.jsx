import React from "react";
function Todo(props){
    

    return (
     <div>
     <li style={{listStyle:"none"}} >
     <span style={props.t.status ? {textDecoration:"line-through"}:{}}>{props.t.title}</span>
     <button className={(props.t.status) ? "btn btn-success bg-success-subtle text-dark ms-4":"btn btn-info bg-info-subtle  text-dark ms-4"} onClick={()=>{props.toggle(props.t.id)}}>{(props.t.status) ? "undo" :"done"}</button>
     <button  className="btn btn-danger bg-danger-subtle m-1 text-dark ms-3"onClick={()=>{props.del(props.t.id)}}>Delete</button>
     </li>
    </div>
);
}
export default Todo; 