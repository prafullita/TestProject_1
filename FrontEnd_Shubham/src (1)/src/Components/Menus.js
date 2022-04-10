import React from "react";
import { ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import { Row,Col } from "reactstrap";

const Menus=()=>{
    return(
        <div>
                  
        <ListGroup className="text-justify">
               
                <Link className="bg-success list-group-item list-group-item-action" tag="a" to="/" action>
                    Add Course
                </Link>
            
            </ListGroup>
           

        </div>
    );
};

export default Menus;