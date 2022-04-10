import React from "react";
import { ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import { Row,Col } from "reactstrap";

const Menus2=()=>{
    return(
        <div>
                  
        <ListGroup className="text-justify">
               
                <Link className="bg-info list-group-item list-group-item-action" tag="a" to="/view" action>
                   View Course
                </Link>
                
            </ListGroup>
           

        </div>
    );
};

export default Menus2;