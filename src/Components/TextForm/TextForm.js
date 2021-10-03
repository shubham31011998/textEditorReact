import React, {useState} from 'react';
import {Form,Button,Badge} from 'react-bootstrap';

export default function TextForm(props) {
    // handle on change function
    const handelChange = (e) =>{
        // console.log(text);
        setText(e.target.value);
    }

    // upperCase convert Text
    const upperCaseText = () =>{
        let newText = text.toUpperCase();
        setText(newText); 
    }

     // lowerCase convert Text
     const lowerCaseText = () =>{
        let newText = text.toLowerCase();
        setText(newText); 
    }

    const[text, setText]= useState("")
    const[mode, setStyle]= useState({
        navColor:{
            backgroundColor: "#303134",
            color: "#ffffff"
        },
        bodyColor:{
            backgroundColor: "#202124",
            color: "#ffffff"
        }
        
    })
    return (
        <>
            <div className="container">
                <Form style={mode.navColor}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h2>{props.heading}</h2></Form.Label>
                    <Form.Control as="textarea" rows={5} value={text} placeHolder="Enter your text here..." onChange={handelChange}/>
                    <Button variant="primary" size="sm" className="my-2 mr-2" onClick={upperCaseText}>Convert to upperCase</Button>
                    <Button variant="primary" size="sm" className="m-2" onClick={lowerCaseText}>Convert to lowerCase</Button>
                </Form.Group>
                </Form>
            </div>
            <div className="container">
                <hr />
                <h2>Your Text Details:</h2>
                <p>There are <Badge bg="light" text="dark">{text.split(" ").length}</Badge> Words and <Badge bg="light" text="dark">{text.length}</Badge> Characters in your text.</p>
                <p>Time required to read: <Badge bg="light" text="dark">{text.split(" ").length * 1.66} Seconds</Badge></p>
                <hr />
                <h3>Text Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
