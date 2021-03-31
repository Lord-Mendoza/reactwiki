import React, {Component} from 'react';
import '../../styling/ComponentStyling.css';
import {Carousel, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Prism from "prismjs";

class LoaderComponentInfo extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <h1 className="display-4" style={{textAlign: "center"}}>Loader Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <div style={{textAlign: "left", paddingLeft: 30}}>
                        <ol>
                            <li><a className="nav-link glossary" href="#demo"> Available Configurations </a></li>
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
                    <h3 style={{textAlign: "left", paddingLeft: 50}}>  Available Configurations  </h3>

                    <Carousel pauseOnHover={true}>
                        <Carousel.Item>
                            <img
                                src="./loader.gif"
                                alt="Code for rendering form"
                            />
                            <Carousel.Caption>
                                <h3>Default appearance</h3>
                                <p>This is how the LoaderComponent appears with inverted not being specified. </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src="./loaderInverted.gif"
                                alt="Code for rendering form"
                            />
                            <Carousel.Caption>
                                <h3><i>inverted</i> = false</h3>
                                <p>You can set the LoaderComponent to have a dark background.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>

                {/*=======================================================
                   ====================== Next Section ===================
                   =======================================================*/}
                <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                    <section className={"codeSampleImplementation"}>
                        <pre className={"language-javascript"}>
                            <code>
                                {loaderSampleCode}
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
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> isLoading</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> Determines if the content needs to be overlayed.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> A boolean</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> content</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> The content to be overlayed.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> An object</dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"95%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> loadingMessage</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> What message to appear at the center of the overlay.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> A string</dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> inverted</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> Whether to invert the background color of the overlay.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> A boolean</dd>
                    </dl>

                </section>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        );
    }
}

const loaderSampleCode = `<LoaderComponent
//Required Ones 
isLoading={this.state.isLoadingGrid}
content={gridComponentVariable}

//Optional Ones 
loadingMessage={"Loading..."}
inverted={false}
/>`

export default LoaderComponentInfo;

