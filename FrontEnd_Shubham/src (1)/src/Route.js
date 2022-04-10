import logo from './logo.svg';
import './App.css';
import {Button,Col,Row,Container} from "reactstrap";
import {ToastContainer,toast} from 'react-toastify';
import Home from "./Components/Home";
import Course from "./Components/Course";
import Allcourse from './Components/Allcourse';
import AddCourse from './Components/AddCourse';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import Menus from './Components/Menus';
import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

const Route=()=>{
    return(
        <div>
        <ToastContainer />    
  <BrowserRouter>
  <Row>
      <HeaderComponent />
    </Row>
    <Container>
    
      <Row>
        <Col md={4}>
          <Menus />
        </Col>
        <Col md={8}>
        <Routes>
            <Route  exact path="/" element={<AddCourse />} /> 
        
            <Route  exact path ="/add" element={<Allcourse />} /> 
            
            <Route exact path="/all" element={<Allcourse  />} /> 
            </Routes>
        </Col>
      </Row>
      
    </Container>
    <Row>
        <FooterComponent />
      </Row>
    </BrowserRouter>
    </div>
    )
}

export default Route;