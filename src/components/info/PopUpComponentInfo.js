import React, {Component} from 'react';
import '../../styling/ComponentStyling.css';
import {Carousel, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Prism from "prismjs";

class PopUpComponentInfo extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>

                <h1 className="display-4" style={{textAlign: "center"}}>Popup Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <div style={{textAlign: "left", paddingLeft: 30}}>
                        <ol>
                            <li><a className="nav-link glossary" href="#prereq">Pre-Requisites</a></li>
                            <li><a className="nav-link glossary" href="#configs">Available Configurations</a></li>
                            <li><a className="nav-link glossary" href="#implementation">Sample Implementation</a></li>
                            <li><a className="nav-link glossary" href="#props">Props</a></li>
                        </ol>
                    </div>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"prereq"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Pre-Requisites </h3>

                    <div style={{textAlign: "left", paddingLeft: 70}}>
                        <p> &#8226; You need to include the following on your package.json </p>
                        <div style={{paddingLeft: 80}}>
                            <samp>
                                <p>&#34;dependencies&#34;:    &#123;</p>
                                <p style={{marginLeft: "40px"}}>&#8220;react-bootstrap&#8221;    &#58; &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;bootstrap&#8221;: &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;react-icons&#8221;: &#8220;latest&#8221;,</p>
                                <p>&#125;</p>
                            </samp>
                        </div>

                        <p> &#8226; Then on your index.js file include: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import 'bootstrap/dist/css/bootstrap.min.css'; </samp>
                        </div>

                        <br/>
                        <p> &#8226; Lastly, import the PopupComponent for use: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import PopupComponent from "./PopupComponent"; </samp>
                        </div>
                    </div>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"configs"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Available Configurations </h3>

                    <Carousel pauseOnHover={true}>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="./closeOnly.png"
                                alt="Render for closeOnly"
                                style={{paddingLeft: "400px", paddingRight: "400px", paddingBottom: "10px"}}
                            />
                            <Carousel.Caption>
                                <h3><i>footerConfig</i> = "closeOnly"</h3>
                                <p>Displays only a close button.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="./submit.png"
                                alt="Render for simple"
                                style={{paddingLeft: "400px", paddingRight: "400px", paddingBottom: "10px"}}
                            />

                            <Carousel.Caption>
                                <h3><i>footerConfig</i> = "submit"</h3>
                                <p>Displays a submit button along with a close button.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="./popupall.png"
                                alt="Render for search"
                                style={{paddingLeft: "400px", paddingRight: "400px", paddingBottom: "10px"}}
                            />

                            <Carousel.Caption>
                                <h3><i>footerConfig</i> = "all"</h3>
                                <p>Displays the close, reset, and submit buttons (ideal for forms).</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="./custom.png"
                                alt="Render for all"
                                style={{paddingLeft: "400px", paddingRight: "400px", paddingBottom: "10px"}}
                            />

                            <Carousel.Caption>
                                <h3><i>footerConfig</i> = "custom"</h3>
                                <p>You can define what appears on the footer section.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="./formInside.png"
                                alt="Render for all with a form as the content"
                                style={{paddingLeft: "400px", paddingRight: "400px", paddingBottom: "10px"}}
                            />

                            <Carousel.Caption>
                                <h4>You can utilize the content portion of the popup to have another component.</h4>
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
                        <pre className="language-javascript">
                            <code>
                                {popupCodeSample}
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
                        <dd className="col-sm-9" style={{textAlign: "left"}}> The content of the popup. PopupComponent
                            offers flexibility on the content, such as placing another component (ex. FormComponent)
                            inside.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A string, or another component. </dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> footerConfig</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            The buttons to appear at the foot of the popup.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            <p>A string of either</p>
                            <p>i. “custom” = giving the developer the option to define their own buttons in the
                                footer</p>
                            <p>ii. “closeOnly” = renders only a close button to close the popup.</p>
                            <p>iii. “submit” = renders a close button as well as submit button.</p>
                            <p>iv. “all” = renders a close, reset, & submit button. Ideal for forms</p>
                        </dd>

                        <dt className="col-sm-3"> Notes</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            Providing the value of “custom” requires for customFooter to be defined
                        </dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> closeToggled</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            This property uses the supplied callback function to close the popup component. Ideally, the
                            callback function should set the state of showing the popup to false.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            A callback function
                        </dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"95%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> resetToggled</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> When “footerConfig” is set to “all”, this
                            must be included to respond to the user's desire to reset what's placed in the content body.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> submitToggled</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            When “footerConfig” is set to “all” or “submit”, this must be included to respond to the
                            user's desire to submit what's placed in the content body.
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function</dd>
                    </dl>

                </section>

                <ScrollUpButton showAtPosition={500}/>
            </div>

        );
    }
}

const popupCodeSample = `<PopupComponent 
    //Required Ones 
    header={"Title"}
    content={"Message here"}
    footerConfig={"all"}
    closeToggled={this.closePopup}
    
    //Optional One 
    resetToggled={this.handleReset} 
    submitToggled={this.handleSubmit} 
/>`

export default PopUpComponentInfo;