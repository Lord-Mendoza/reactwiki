import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import MainComponent from "./MainComponent";

class Navigation extends Component{
    constructor(props){
        super(props);

        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e){
        console.log(e.target.id)
    }


    render(){
        return(
            <Navbar sticky="top" collapseOnSelect expand ="lg" bg="dark" variant="dark">
                <Navbar.Brand> React Wiki </Navbar.Brand>
                <NavDropdown title = "Components">
                    <NavDropdown.Item id="grid-component" onClick = {this.handleSelection} > Grid Component </NavDropdown.Item>
                    <NavDropdown.Item id='form-container' onClick = {this.handleSelection}> Form Component </NavDropdown.Item>
                    <NavDropdown.Item id='popup-container' onClick = {this.handleSelection}> PopUp Component </NavDropdown.Item>
                    <NavDropdown.Item id='mask-container' onClick = {this.handleSelection}> Mask Component </NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        );
    }
}

export default Navigation;