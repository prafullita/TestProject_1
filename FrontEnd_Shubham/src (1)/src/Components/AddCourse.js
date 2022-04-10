import axios from "axios";
import React, { Fragment,useEffect, useState } from "react";
import { FormGroup, Label,Form,Input, Button,Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Allcourse from "./Allcourse";
import { Link } from "react-router-dom";
const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Course";
     
    }, []);

    const [courses,setCourses]=useState({});
    
    //form handler function
    const handleForm=(e)=>{
        console.log(courses);
        postDataToServer(courses);
        e.preventDefault();
    };
    
    //post data 
const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses/add`,data).then((response) =>{
        console.log(response);
        toast.success("Course added successfully",{
            position:"bottom-right"
        });
        setCourses({});
    },
    (error)=>{
        console.log(error);
        toast.error("Something went wrong");
    })
}
    return (
        <>
        <h1 className="text-center">Fill Course Details</h1>
          <Form onSubmit={handleForm}>
              <FormGroup>
                  <Label>Course Id</Label>
                  <Input 
                  type="hidden"
                  placeholder="Enter here"
                  name="userId"
                  id="userId" 
                    onChange={(e)=>{
                        setCourses({...courses,id:e.target.value})
                    }}
                  /> 
              </FormGroup>
              <FormGroup>
                  <Label for="title">Course Title</Label>
                  <Input 
                  type="text"
                  placeholder="Enter title here"
                  id="title" 
                  onChange={(e)=>{
                        setCourses({...courses,title:e.target.value})
                    }}
                  /> 
              </FormGroup>
              <FormGroup>
                  <Label for="description">Course description</Label>
                  <Input 
                  type="textarea"
                  placeholder="Enter description here"
                  id="description" 
                  onChange={(e)=>{
                        setCourses({...courses,description:e.target.value})
                    }}
                  /> 
              </FormGroup>

              <Container>
             
                  <Button type="submit" color="success" >
                      Add Course
                  </Button>
                
                  <Button type="reset" colour="warning">
                      Clear
                  </Button>
              </Container>
          </Form>  
        </>
    );
};

export default AddCourse;