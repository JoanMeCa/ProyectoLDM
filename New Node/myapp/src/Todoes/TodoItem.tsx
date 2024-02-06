import React from "react";
import { Button } from "react-bootstrap";

function TodoItem({content}: {content : String}) {
    return (
        <div className="">
            <li>{content}  </li>
            <Button variant="primary">Botón</Button>
        </div>
    ) 
    
}

export default TodoItem;