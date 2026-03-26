import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
function Todolist() {
  var [todo, settodo] = React.useState([
    {
      title: "Get veggies",
      id: uuidv4(),
      status: true,
    },
    {
      title: "school Fee",
      id: uuidv4(),
      status: false,
    },
    {
      title: "Clean car",
      id: uuidv4(),
      status: false,
    },
    {
      title: "Go to vacation",
      id: uuidv4(),
      status: true,
    },
    {
      title: "Get Bike",
      id: uuidv4(),
      status: true,
    },
  ]);
  function deltodo(id) {
    settodo((currenttodo) => {
      return currenttodo.filter((todos) => {
        if (todos.id == id) {
          return false;
        }
        else {
          return true;
        }
      })
    })
  }

  function add() {
    var newtodo = {
      title: document.getElementById("d1").value,
      id: uuidv4()
    }
    settodo([...todo, newtodo]);
  }

  function toggletodo(id) {
    settodo((cv) => {
      var x = cv.map((todos) => {
        if (todos.id == id) {
          todos.status = !(todos.status)
        }
        return todos;

      })
      return [...x]
    })
  }
  return (
    <div className="border border-2  p-4 m-4 " style={{ backgroundColor: "blanchedalmond" }} >
      <input type="text" id="d1" />
      <button onClick={() => { add() }} className="btn btn-primary bg-primary-subtle text-dark ms-3">Add Task</button>
      <ul className="mt-3">
        {console.log(todo)}
        {
          todo.map((todos, i) => {
            return (<Todo t={todos} del={deltodo} toggle={toggletodo} ></Todo>)
          })
        }
      </ul>
    </div>
  )
}
export default Todolist;