import React, {Component} from 'react';
import FormComponent from './FormComponent';
import GridComponent from './GridComponent';
import PopUpComponent from './PopUpComponent';
import MaskComponent from './MaskComponent';
import FileUploadComponent from './FileUploadComponent';
import LoaderComponent from "./LoaderComponent";

import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './MainComponent.css';
import 'aos/dist/aos.css';
import AOS from "aos";

class MainComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            selection:"",
            copySuccess:""
        };

        this.handleSelection = this.handleSelection.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    handleSelection(e){
        this.setState({
          selection: e.target.id
        })
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({
            copySuccess: "Copied!"
        })
    };


    render(){
        AOS.init();

        let mainComponent = <FileUploadComponent />;
        if(this.state.selection === "grid-component"){
            mainComponent = <GridComponent />
        } else if (this.state.selection === "form-component"){
            mainComponent = <FormComponent />
        } else if (this.state.selection === "popup-component"){
            mainComponent = <PopUpComponent />
        } else if (this.state.selection === "mask-component") {
            mainComponent = <MaskComponent />
        } else if (this.state.selection === "loader-component") {
            mainComponent = <LoaderComponent />
        } else if (this.state.selection === "file-component") {
            mainComponent = <FileUploadComponent />
        }
        return(
            <div>
                <Navbar sticky="top" collapseOnSelect expand ="lg" bg="dark" variant="dark">
                    <Navbar.Brand> React Wiki </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title = "Components">
                                <NavDropdown.Item id='file-component' onClick = {this.handleSelection}> File Upload Component </NavDropdown.Item>
                                <NavDropdown.Item id='form-component' onClick = {this.handleSelection}> Form Component </NavDropdown.Item>
                                <NavDropdown.Item id="grid-component" onClick = {this.handleSelection} > Grid Component </NavDropdown.Item>
                                <NavDropdown.Item id='loader-component' onClick = {this.handleSelection}> Loader Component </NavDropdown.Item>
                                <NavDropdown.Item id='mask-component' onClick = {this.handleSelection}> Mask Component </NavDropdown.Item>
                                <NavDropdown.Item id='popup-component' onClick = {this.handleSelection}> PopUp Component </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href={"./reactComponents.zip"}> Get Package </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {mainComponent}

            </div>


        );
    }
}

export default MainComponent;