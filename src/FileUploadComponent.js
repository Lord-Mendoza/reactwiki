import React, {Component} from 'react';
import './ComponentStyling.css';
import {Carousel, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class FileUploadComponent extends Component {
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
                <h1 className="display-4" style={{textAlign: "center"}}>File Upload Component</h1>

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
                        <p> You need to include the following on your package.json </p>
                        <div style={{paddingLeft: 80}}>
                            <samp>
                                <p>&#34;dependencies&#34;:    &#123;</p>
                                <p>&#8220;semantic-ui-css&#8221;    &#58; &#8220;^2.4.1&#8221;,</p>
                                <p>&#8220;semantic-ui-react&#8221;: &#8220;^0.87.1&#8221;,</p>
                                <p>&#8220;react-dropzone&#8221;: &#8220;^10.1.7&#8221;,</p>
                                <p>&#125;</p>
                            </samp>
                        </div>

                        <p> Then on your index.js file include: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import 'semantic-ui-css/semantic.min.css'; </samp>
                        </div>

                        <br/>
                        <p> Lastly, import the FileUploadComponent for use: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import FileUploadComponent from "./FileUploadComponent"; </samp>
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
                        src="./fileupload.gif"
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
                        <p> &lt;FileUploadComponent </p>
                        <p>     &#47;&#47;Required Ones </p>
                        <p>     files=&#123;this.getUploadedFiles&#125;</p>
                        <br/>

                        <p>     &#47;&#47;Optional Ones </p>
                        <p>     fileType=&#123;"text/plain"&#125;</p>
                        <p>     resetUponSubmit=&#123;false&#125;</p>
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
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> files</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>Uses the callback function to return the list of files.</dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function.</dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"90%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> fileType</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Determines the file type that the file uploader will accept.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> "" (which will accept any file type).
                        </dd>

                        <dt className="col-sm-3"> Values</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>A string that specifies a file type.</dd>
                    </dl>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> resetUponSubmit</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Determines whether to reset the list of files uploaded upon clicking "submit".
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> true
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

export default FileUploadComponent;

