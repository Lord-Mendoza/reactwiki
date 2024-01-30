import React, {Component} from 'react';
import PopupComponentInfo from './info/PopupComponentInfo';
import SearchFormComponentInfo from "./info/SearchFormComponentInfo";

import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import '../styling/MainComponent.css';
import 'aos/dist/aos.css';
import AOS from "aos";
import Prism from "prismjs";
import "../styling/prism.css"
import {Icon} from "semantic-ui-react";
import {Switch} from "antd";
import MenuAndContentComponent from "./MenuAndContentComponent";
import {gridInfoConfig} from "./info/GridInfoConfig";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import {formFieldsInfoConfig} from "./info/FormFieldsInfoConfig";
import {loaderInfoConfig} from "./info/LoaderInfoConfig";
import {maskInfoConfig} from "./info/MaskInfoConfig";
import {fileUploadInfoConfig} from "./info/FileUploadInfoConfig";

class MainComponent extends Component {
    constructor(props) {
        super(props);

        let darkMode;
        if (localStorage.getItem("isDarkMode") === "true")
            darkMode = true;

        this.state = {
            darkMode,
            copySuccess: ""
        };

        this.handleSelection = this.handleSelection.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.setDarkModeToLocalStorage = this.setDarkModeToLocalStorage.bind(this);
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    handleSelection(e) {
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

    setDarkModeToLocalStorage() {
        const {darkMode} = this.state;
        localStorage.setItem('isDarkMode', darkMode === true ? "true" : "false");
    }


    render() {
        const {selection, darkMode} = this.state;

        AOS.init();

        let mainComponent;
        switch (selection) {
            case "form-fields-component":
                window.scrollTo(0, 0);
                mainComponent = <MenuAndContentComponent darkMode={darkMode} {...formFieldsInfoConfig}/>;
                break;
            case "grid-component":
                window.scrollTo(0, 0);
                mainComponent = <MenuAndContentComponent darkMode={darkMode} {...gridInfoConfig}/>;
                break;
            case "loader-component":
                window.scrollTo(0, 0);
                mainComponent = <MenuAndContentComponent darkMode={darkMode} {...loaderInfoConfig}/>;
                break;
            case "mask-component":
                window.scrollTo(0, 0);
                mainComponent = <MenuAndContentComponent darkMode={darkMode} {...maskInfoConfig}/>;
                break;
            case "popup-component":
                window.scrollTo(0, 0);
                mainComponent = <PopupComponentInfo/>;
                break;
            case "search-component":
                window.scrollTo(0, 0);
                mainComponent = <SearchFormComponentInfo/>;
                break;
            case "file-component":
                window.scrollTo(0, 0);
                mainComponent = <MenuAndContentComponent darkMode={darkMode} {...fileUploadInfoConfig}/>;
                break;
            default:
                window.scrollTo(0, 0);
                mainComponent = <MenuAndContentComponent darkMode={darkMode} {...gridInfoConfig}/>;
                break;
        }

        let style = {};
        if (darkMode === true)
            style = {backgroundColor: "#222222", color: "white"};

        return (
            <div>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding: "10px"}}>
                    <Navbar.Brand>
                        <img src={"logo.png"} style={{marginRight: "5px"}} alt={'react wiki logo'}/>
                        <span style={{verticalAlign: "text-bottom"}}>React Wiki</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown id="nav-dropdown" title="Components">
                                <NavDropdown.Item id='file-component' onClick={this.handleSelection}> File Upload
                                    Component </NavDropdown.Item>
                                <NavDropdown.Item id='form-fields-component' onClick={this.handleSelection}> Form Fields
                                    Component </NavDropdown.Item>
                                <NavDropdown.Item id="grid-component" onClick={this.handleSelection}> Grid
                                    Component </NavDropdown.Item>
                                <NavDropdown.Item id='loader-component' onClick={this.handleSelection}> Loader
                                    Component </NavDropdown.Item>
                                <NavDropdown.Item id='mask-component' onClick={this.handleSelection}> Mask
                                    Component </NavDropdown.Item>
                                <NavDropdown.Item id='popup-component' onClick={this.handleSelection}> Popup
                                    Component </NavDropdown.Item>
                                <NavDropdown.Item id='search-component' onClick={this.handleSelection}> Search Form
                                    Component </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href={"https://www.npmjs.com/package/reactwiki-components"}> Get
                                Package </Nav.Link>
                        </Nav>

                        <div style={{padding: ".5rem 1rem"}}>
                            <span className={"darkModeLabel"}> Dark Mode: &nbsp;</span>
                            <Switch
                                checkedChildren={<Icon name='moon'/>}
                                unCheckedChildren={<Icon name='sun' inverted/>}
                                checked={darkMode}
                                onChange={() => this.setState({
                                    darkMode: !darkMode
                                }, this.setDarkModeToLocalStorage)}
                            />
                        </div>

                        <div style={{padding: ".5rem 1rem .5rem 0"}}>
                            <a href={"https://github.com/lord-mendoza/reactWiki-components"} style={{color: 'white'}}>
                                <Icon name="github" size='large'/> </a>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

                <div style={{paddingBottom: "15px", ...style}} className={darkMode === true ? "darkMode" : ""}>
                    {mainComponent}
                </div>

                <div
                    style={{paddingBottom: "10px", backgroundColor: "#343a40", paddingTop: "10px", marginTop: "-15px"}}>
                    <h4 style={{color: "white", textAlign: "center"}}>Developed by <a href="https://lordmendoza.com/">Lord
                        Mendoza</a></h4>
                </div>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        );
    }
}

export default MainComponent;