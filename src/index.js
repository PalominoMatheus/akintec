import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './center_section.css';
import Navbar from './Navbar';
import SWForm from './SWForm';

ReactDOM.render(
    <Navbar/>,
    document.getElementById("navbar")
);

ReactDOM.render(
    <SWForm/>,
    document.getElementById("swform")  
);