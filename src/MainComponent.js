import React, {Component} from 'react';
import FormComponent from './FormComponent';
import GridComponent from './GridComponent';
import PopUpComponent from './PopUpComponent';
import MaskComponent from './MaskComponent';
import {Navbar, NavDropdown, Button} from 'react-bootstrap';
import './MainComponent.css';



class MainComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            selection:"",
            copySuccess:""
        }

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
    }


    render(){
        let mainComponent;
        if(this.state.selection === "grid-component"){
            mainComponent = <GridComponent />
        } else if (this.state.selection === "form-component"){
            mainComponent = <FormComponent />
        } else if (this.state.selection === "popup-component"){
            mainComponent = <PopUpComponent />
        } else if (this.state.selection === "mask-component") {
            mainComponent = <MaskComponent />
        }
        return(
            <div>
                <Navbar sticky="top" collapseOnSelect expand ="lg" bg="dark" variant="dark">
                    <Navbar.Brand> React Wiki </Navbar.Brand>
                    <NavDropdown title = "Components">
                        <NavDropdown.Item id="grid-component" onClick = {this.handleSelection} > Grid Component </NavDropdown.Item>
                        <NavDropdown.Item id='form-component' onClick = {this.handleSelection}> Form Component </NavDropdown.Item>
                        <NavDropdown.Item id='popup-component' onClick = {this.handleSelection}> PopUp Component </NavDropdown.Item>
                        <NavDropdown.Item id='mask-component' onClick = {this.handleSelection}> Mask Component </NavDropdown.Item>
                        <NavDropdown.Item id='get-package-component'> Get Package </NavDropdown.Item>
                    </NavDropdown>
                </Navbar>
                {mainComponent}

                <div>
                    <button onClick = {this.copyToClipboard}>Copy</button>
                    {this.state.copySuccess}
                </div>
                <form>
                    <textarea
                        ref={(textarea) => this.textArea = textarea}
                        value='copy here'
                    />
                </form>
            </div>


        );
    }
}

export default MainComponent;