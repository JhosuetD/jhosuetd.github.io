import React from "react";
function TodoItem (props) {
    return(
        <li>
            <span> Metas para cumplir este año </span>
              <p style ={{
    border: 'none',
    backgroundColor:'violet',
    color: "black",
    padding: '10 px' ,
    borderRadius: '10px' ,
    textAlign:"center", }} > {props.text} </p>
            <span> Costo de el curso a invertir </span>
        </li>
    )
}

export {TodoItem}