import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  NavbarMain  from './Components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import TextForm from './Components/TextForm/TextForm';



const App = (props) => (
  <div>
    <NavbarMain />
    <Container>
      <div className="py-5">
        <TextForm heading="Add Your Text To Edit"/>
      </div>
    </Container>
  </div>
);

export default App;
