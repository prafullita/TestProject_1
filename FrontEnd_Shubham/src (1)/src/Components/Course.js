import axios from "axios";
import React from "react";
import {
    Card,CardBody,CardTitle,CardSubtitle,
    CardText,CardFooter,Button,Container
} from "reactstrap";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import AddCourse from "./AddCourse";
import { Link } from "react-router-dom";
import { Action } from "history";


const Course=({course,update})=>{

    const updateCourses=(cd)=>{
        
        <AddCourse id={cd.id} title={cd.title} description={cd.description} />
    }

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) =>{
                console.log(response);
                toast.success("Course Deleted Successfully",{
                    position:"bottom-right"
                });
                update(id);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    };

    const updateitem=(id)=>{
        axios.delete(`${base_url}/courses/update`).then(
            (response) =>{
                console.log(response);
                toast.success("Course Deleted Successfully",{
                    position:"bottom-right"
                });
                update(id);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    };

           
return (
    <Card className="text-center">
        <CardBody>
        <div className="font-weight-bold">
            <CardSubtitle>{course.title}</CardSubtitle>
            </div>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
            <div className="row">
            <div className="col-md-4"></div>
                <div className="col-md-1">
                
                <Button color="danger" 
                onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                </div>
                <div className="col-md-1">
               
            <Link  to={`/edit/${course.id}` }>               
            <Button color="warning">Update</Button>
            </Link>
 
                </div>
            </div>

            </Container>
        </CardBody>
    </Card>
)
}

export default Course;