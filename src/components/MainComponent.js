import React, {Component} from 'react';
import FormFieldsComponent from './FormFieldsComponent';
import GridComponent from './GridComponent';
import PopUpComponent from './PopUpComponent';
import MaskComponent from './MaskComponent';
import FileUploadComponent from './FileUploadComponent';
import LoaderComponent from "./LoaderComponent";

import {Navbar, NavDropdown, Nav, Image} from 'react-bootstrap';
import '../styling/MainComponent.css';
import 'aos/dist/aos.css';
import AOS from "aos";

class MainComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
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
        const {selection} = this.state;

        AOS.init();

        let mainComponent;
        switch (selection) {
            case "form-fields-component":
                window.scrollTo(0,0);
                mainComponent = <FormFieldsComponent />;
                break;
            case "grid-component":
                window.scrollTo(0,0);
                mainComponent = <GridComponent />;
                break;
            case "loader-component":
                window.scrollTo(0,0);
                mainComponent = <LoaderComponent />;
                break;
            case "mask-component":
                window.scrollTo(0,0);
                mainComponent = <MaskComponent />;
                break;
            case "popup-component":
                window.scrollTo(0,0);
                mainComponent = <PopUpComponent />;
                break;
            case "file-component":
            default:
                window.scrollTo(0,0);
                mainComponent = <FileUploadComponent />;
                break;
        }

        return(
            <div>
                <Navbar sticky="top" collapseOnSelect expand ="lg" bg="dark" variant="dark">
                    <Navbar.Brand> <Image src={"logo.png"} style={{marginBottom: "4px", marginRight: "4px"}}/> React Wiki </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown id="nav-dropdown" title = "Components">
                                <NavDropdown.Item id='file-component' onClick = {this.handleSelection}> File Upload Component </NavDropdown.Item>
                                <NavDropdown.Item id='form-fields-component' onClick = {this.handleSelection}> Form Fields Component </NavDropdown.Item>
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