import React, {Component} from 'react';
import '../styling/ComponentStyling.css';
import {Carousel, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class LoaderComponent extends Component {
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
                <h1 className="display-4" style={{textAlign: "center"}}>Loader Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <p style={{textAlign: "left", paddingLeft: 50}}>
                        <a className="nav-link glossary" href="#prereq">Pre-Requisites</a>
                        <a className="nav-link glossary" href="#demo"> Available Configurations </a>
                        <a className="nav-link glossary" href="#implementation">Sample Implementation</a>
                        <a className="nav-link glossary" href="#props">Props</a>
                    </p>
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
                                <p style={{marginLeft: "40px"}}>&#8220;semantic-ui-css&#8221;    &#58; &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;semantic-ui-react&#8221;: &#8220;latest&#8221;,</p>
                                <p>&#125;</p>
                            </samp>
                        </div>

                        <p> &#8226; Then on your index.js file include: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import 'semantic-ui-css/semantic.min.css'; </samp>
                        </div>

                        <br/>
                        <p> &#8226; Lastly, import the LoaderComponent for use: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import LoaderComponent from "./LoaderComponent"; </samp>
                        </div>
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
                            <Image
                                src="./loader.gif"
                                alt="Code for rendering form"
                                style={{width: "50%"}}
                            />
                            <Carousel.Caption>
                                <h3>Default appearance</h3>
                                <p>This is how the LoaderComponent appears with inverted not being specified. </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                src="./loaderInverted.gif"
                                alt="Code for rendering form"
                                style={{width: "50%"}}
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

                    <pre className="prettyprint lang-html">
                    <code>
                        <br/>
                        <p> &lt;LoaderComponent </p>
                        <p>     &#47;&#47;Required Ones </p>
                        <p>     isLoading=&#123;this.state.isLoadingGrid&#125;</p>
                        <p>     content=&#123;gridComponentVariable&#125;</p>
                        <br/>

                        <p>     &#47;&#47;Optional Ones </p>
                        <p>     loadingMessage=&#123;"Loading..."&#125;</p>
                        <p>     inverted=&#123;false&#125;</p>
                        /&gt;
                    </code>
                </pre>
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
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> isLoading</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Determines if the content needs to be overlayed.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> content</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> The content to be overlayed.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> An object</dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"90%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> loadingMessage</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> What message to appear at the center of the overlay.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A string</dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> inverted</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Whether to invert the background color of the overlay.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean</dd>
                    </dl>

                </section>

                <ScrollUpButton showAtPosition={300}/>
            </div>
        );
    }
}

export default LoaderComponent;

