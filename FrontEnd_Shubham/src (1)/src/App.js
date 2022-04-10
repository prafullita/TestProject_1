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

import { BrowserRouter,Route, Routes } from 'react-router-dom';
import EditCourse from './Components/EditCourse';
import Menus2 from './Components/Menus2';
function App()
{
const btn=()=>{
  toast("This is my first message");
}

  return (
    <div>    
    <ToastContainer />    
  <BrowserRouter>
  <Row>
      <HeaderComponent />
    </Row>
    <Container>
    
      <Row>
        <Col md={6}>
          <Menus />
      </Col>
      <Col md={6}>
          <Menus2 />
      </Col>
       
        <Routes>
            <Route  exact path="/" element={<AddCourse />} /> 
        
            <Route  exact path ="/view" element={<Allcourse />} /> 
            <Route  exact path ="/edit/:id" element={<EditCourse />} /> 
           
            </Routes>
        
      </Row>
      
    </Container>
    <Row>
        <FooterComponent />
      </Row>
    </BrowserRouter>
   </div>

  )
  }

export default App;
