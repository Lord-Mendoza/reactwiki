import React, {Component} from 'react';
import './ComponentStyling.css';
import {Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class MaskComponent extends Component {
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
                <h1 className="display-4" style={{textAlign: "center"}}>Mask Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <ul className="nav flex-column" style={{textAlign: "left", paddingLeft: 50, lineHeight: "10px"}}>
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
                        <p> &#8226; You need to include the following on your package.json </p>
                        <div style={{paddingLeft: 80}}>
                            <samp>
                                <p>&#34;dependencies&#34;:    &#123;</p>
                                <p style={{marginLeft: "40px"}}>&#8220;react-bootstrap&#8221;    &#58; &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;bootstrap&#8221;: &#8220;latest&#8221;,</p>
                                <p>&#125;</p>
                            </samp>
                        </div>

                        <p> &#8226; Then on your index.js file include: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import 'bootstrap/dist/css/bootstrap.min.css'; </samp>
                        </div>

                        <br/>
                        <p> &#8226; Add the loading.png file to the public folder. <i> Note: you can put your own image on there, as long as its named "loading.png". </i> </p>

                        <p> &#8226; Lastly, import the MaskComponent for use: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import MaskComponent from "./MaskComponent"; </samp>
                        </div>
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

                    <pre className="prettyprint lang-html">
                    <code>
                        <br/>
                        <p> &lt;MaskComponent </p>
                        <p>     &#47;&#47;Required Ones </p>
                        <p>     header=&#123;"Please Wait"&#125;</p>
                        <p>     content=&#123;"Loading"&#125;</p>
                        <p>     show=&#123;this.state.toggleShow&#125;</p>
                        <br/>

                        <p>     &#47;&#47;Optional One </p>
                        <p>     loadingIcon=&#123;true&#125; </p>
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

                    <hr width={"90%"}/>
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

                    <ScrollUpButton showAtPosition={300}/>
                </section>
            </div>
        );
    }
}

export default MaskComponent;

