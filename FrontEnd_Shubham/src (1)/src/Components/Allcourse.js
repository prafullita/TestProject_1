import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse =() =>{

    useEffect(()=>{
        document.title="All Courses";
    }, []);

    const getAllCoursesFromServer =()=>{
        axios.get(`${base_url}/courses`).then(
            (response) =>{
                console.log(response);
                toast.success("Courses has been loaded",{
                    position:"bottom-right"
                });
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    }; 
    const [courses,setCourses] = useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }
    useEffect(()=>{
       getAllCoursesFromServer();
    }, []);

    return(
        <div className="text-center" >
            <h1>All Course</h1>
            <p>List of all courses are as follows</p>

            {
                courses.length > 0 ?courses.map((item)=>
                <Course key={item.id} course={item} update={updateCourses}/>) :"No courses available"
                
            }
        </div>
    );


};

export default Allcourse;