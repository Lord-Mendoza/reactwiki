import React, {Component} from 'react';
import './ComponentStyling.css';
import {Carousel} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class FormComponent extends Component {
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
                <div>

                    <h1 className="display-4" style={{textAlign: "center"}}>Form Component</h1>

                    <section data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                        <ul className="nav flex-column"
                            style={{textAlign: "left", paddingLeft: 50, lineHeight: "10px"}}>
                            <li className="nav-item">
                                <a className="nav-link" href="#prereq">Pre-Requisites</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#demo">Demonstration</a>
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
                                    <p>&#8220;react-bootstrap&#8221;    &#58; &#8220;^1.0.0-beta.9&#8221;,</p>
                                    <p>&#8220;bootstrap&#8221;: &#8220;^4.3.1&#8221;,</p>
                                    <p>&#125;</p>
                                </samp>
                            </div>

                            <p> Then on your index.js file include: </p>
                            <div style={{paddingLeft: 80}}>
                                <samp> import 'bootstrap/dist/css/bootstrap.min.css'; </samp>
                            </div>

                            <br/>
                            <p> Lastly, import the FormComponent for use: </p>
                            <div style={{paddingLeft: 80}}>
                                <samp> import FormComponent from './FormComponent' </samp>
                            </div>
                        </div>
                    </section>

                    {/*=======================================================
                       ====================== Next Section ===================
                       =======================================================*/}
                    <section id={"demo"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr/>

                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Demonstration </h3>

                        <Carousel pauseOnHover={true}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./formcode.png"
                                    alt="Code for rendering form"
                                />

                                <Carousel.Caption>
                                    <h4>Setting form labels, types, as well as options for the select type.</h4>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./form.png"
                                    alt="Render for form as configured"
                                />

                                <Carousel.Caption>
                                    <h4>Rendering the form in accordance to the configuration.</h4>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./formcodeinvalid.png"
                                    alt="Code for rendering form"
                                />

                                <Carousel.Caption>
                                    <h4>If certain labels are specified to be marked as invalid in the code...</h4>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="./forminvalid.png"
                                    alt="Render for form as configured"
                                />

                                <Carousel.Caption>
                                    <h4>...then they'll be rendered with a red outline, highlighting invalid inputs to
                                        the user. </h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </section>

                    {/*=======================================================
                    ====================== Next Section ======================
                    =======================================================*/}
                    <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr/>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                        <pre className="prettyprint lang-html">
                    <code>
                        <br/>
                        <p> &lt;FormComponent </p>
                        <p>     //Required Ones </p>
                        <p>     configuration=&#123;this.state.configuration&#125;</p>
                        <p>     formValues=&#123;this.getFormValues&#125;</p>
                        <p>     submitForm=&#123;this.state.toggleSubmit&#125;</p>
                        <p>     clearForm=&#123;this.state.toggleClear&#125;</p>
                        <br/>

                        <p>     //Optional One </p>
                        <p>     markInvalid=&#123;this.state.invalid&#125; </p>
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
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> configuration
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> The list of form components to be
                                generated where the label, type, placeholder and options (if applicable) are defined for
                                each component.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> An array of JSON objects</dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9"> configuration = &#123; [ &#123;name: "Full Name", type: "text", placeholder: "required"&#125;,
                                &#123;name: "Date of Birth", type: "date"&#125;,
                                &#123;name: "College Year", type: "select", options: ["Freshman", "Sophomore"]&#125;
                                ] &#125;</dd>

                            <dt className="col-sm-3"> Notes</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                <ul style={{textAlign: "left", listStyleType: "none", paddingLeft: "0px"}}>
                                    <li>i. Placeholder is an available option only to text-based form components.</li>
                                    <li>ii. When using the “select” type, the options property needs to be specified to
                                        render the available options of the select box.
                                    </li>
                                </ul>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> formValues</dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> This property uses the supplied
                                callback function to pass the form values as typed by the user.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> Callback function</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> submitForm</dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> Toggles the FormComponent to submit
                                the retrieved values from the user through the formValues callback function.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean</dd>

                            <dt className="col-sm-3"> Notes</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> Toggling this will not clear the
                                form.
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> clearForm</dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> Toggles the FormComponent to clear the
                                form.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean</dd>
                        </dl>

                        {/*====================== Additional Section ======================*/}

                        <hr width={"90%"}/>
                        <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional
                            Customization </h5>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> markInvalid</dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                <p>This property is used by FormComponent to filter out the components that are invalid.
                                    Once marked invalid, the form component will have a red on its surrounding,
                                    highlighting to the user where they need to revise their entry.</p>
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> An array of strings</dd>

                            <dt className="col-sm-3"> Notes</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> FormComponent does not directly handle
                                validating forms as to allow flexibility & prevent too much customized design.
                            </dd>
                        </dl>

                        <ScrollUpButton showAtPosition={300}/>
                    </section>
                </div>
            </div>
        );
    }
}

export default FormComponent;