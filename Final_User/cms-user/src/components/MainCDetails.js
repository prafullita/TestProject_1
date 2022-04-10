import React, { useEffect} from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import url from "../api/url";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import CourseDet from "./CourseDet";
import Video from "./images/bu.mp4";
import ReactPlayer from "react-player";
import Youtube from "./Youtube";
import Allbatches from "./Allbatches";

const MainCDetails=()=>{

    return(
        <div>
        <center>
            <video width="720" height="350" controls muted autoPlay loop> 
                <source src={Video} type="video/mp4" />
            </video>
        </center>
        <Table className="table table-striped table-bordered">
    <thead className="thead-dark">
      <tr>
        <th>Course Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Batch</th>
        <th>Duration</th>
        <th>Timing</th>
        <th>Fees</th>
      </tr>
    </thead>
    </Table>
        <Allbatches />
        <Youtube />
        </div>
    )
}

export default MainCDetails;