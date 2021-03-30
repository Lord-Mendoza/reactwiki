import React, {Component} from 'react';
import '../../styling/ComponentStyling.css';
import {Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Prism from "prismjs";

class MaskComponentInfo extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <h1 className="display-4" style={{textAlign: "center"}}>Mask Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <div style={{textAlign: "left", paddingLeft: 30}}>
                        <ol>
                            <li><a className="nav-link glossary" href="#demo">Demonstration</a></li>
                            <li><a className="nav-link glossary" href="#implementation">Sample Implementation</a></li>
                            <li><a className="nav-link glossary" href="#props">Props</a></li>
                        </ol>
                    </div>
                </section>

                {/*=======================================================
                   ====================== Next Section ===================
                   =======================================================*/}
                <section id={"demo"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Demonstration </h3>

                    <Image
                        src="./maskcomponent.gif"
                        alt="Clip demonstrating the loader component overlaying a grid."
                        style={{width: "50%"}}
                    />
                </section>

                {/*=======================================================
                   ====================== Next Section ===================
                   =======================================================*/}
                <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                    <section className={"codeSampleImplementation"}>
                        <pre className="language-javascript">
                            <code>
                                {maskCodeSample}
                            </code>
                        </pre>
                    </section>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"props"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Props </h3>

                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> header</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> The title of the popup.</dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A string</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> content</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> The message to appear in the mask popup.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A string</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> show</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>Toggles whether to show the mask or not.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean</dd>

                        <dt className="col-sm-3"> Note</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>It's ideal to assign a parent's state
                            property here to toggle when to show the mask or not
                        </dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"95%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> loadingIcon</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Toggles whether to show a rotating loading
                            icon in the content.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean</dd>
                    </dl>

                </section>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        );
    }
}

const maskCodeSample = `<MaskComponent 
    //Required Ones 
    header={"Please Wait"}
    content={"Loading"}
    show={this.state.toggleShow}
    
    //Optional One 
    loadingIcon={true} 
/>`

export default MaskComponentInfo;

