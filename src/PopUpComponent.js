import React, {Component} from 'react';
import './ComponentStyling.css';
import {Carousel, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class PopUpComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.runCodePrettify();
    }

    runCodePrettify() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;

        script.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    }

    render() {
        return (
            <div>

                <h1 className="display-4" style={{textAlign: "center"}}>PopUp Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <ul className="nav flex-column" style={{textAlign: "left", paddingLeft: 50, lineHeight: "10px"}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#prereq">Pre-Requisites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#configs">Available Configurations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#implementation">Sample Implementation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#api">APIs</a>
                        </li>
                    </ul>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"prereq"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Pre-Requisites </h3>

                    <div style={{textAlign: "left", paddingLeft: 70}}>
                        <p> You need to include the following on your package.json </p>
                        <div style={{paddingLeft: 80}}>
                            <samp>
                                <p>&#34;dependencies&#34;:    &#123;</p>
                                <p>&#8220;react-bootstrap&#8221;    &#58; &#8220;^1.0.0-beta.5&#8221;,</p>
                                <p>&#8220;bootstrap&#8221;: &#8220;^4.3.1&#8221;,</p>
                                <p>&#125;</p>
                            </samp>
                        </div>

                        <p> Then on your index.js file include: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import 'bootstrap/dist/css/bootstrap.min.css'; </samp>
                        </div>

                        <br/>
                        <p> Lastly, import the PopupComponent for use: </p>
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
                                <h3>footerConfig = "closeOnly"</h3>
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
                                <h3>footerConfig = "submit"</h3>
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
                                <h3>footerConfig = "all"</h3>
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
                                <h3>footerConfig = "custom"</h3>
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

                    <pre className="prettyprint lang-html">
                    <code>
                        <br/>
                        <p> &lt;PopupComponent </p>
                        <p>     //Required Ones </p>
                        <p>     header=&#123;"Title"&#125;</p>
                        <p>     content=&#123;"Message here"&#125;</p>
                        <p>     footerConfig=&#123;"all"&#125;</p>
                        <br/>

                        <p>     //Optional One </p>
                        <p>     resetToggled=&#123;this.handleReset&#125; </p>
                        <p>     submitToggled=&#123;this.handleSubmit&#125; </p>
                        /&gt;
                    </code>
                </pre>

                </section>
                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"api"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> APIs </h3>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> header</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> The title of the popup.</dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A string.</dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example</dd>
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
                        <dd className="col-sm-9" style={{textAlign: "left"}}> An object</dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> footerConfig</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            The buttons to appear at the foot of the popup.
                            Note: providing the value of “custom” requires for customFooter to be defined
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

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example</dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"90%"}/>
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

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example</dd>
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

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example</dd>
                    </dl>

                    <ScrollUpButton showAtPosition={300}/>
                </section>
            </div>

        );
    }
}

export default PopUpComponent;