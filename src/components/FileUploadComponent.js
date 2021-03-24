import React, {Component} from 'react';
import '../styling/ComponentStyling.css';
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

                    <p style={{textAlign: "left", paddingLeft: 50}}>
                        <a className="nav-link glossary" href="#prereq">Pre-Requisites</a>
                        <a className="nav-link glossary" href="#demo">Available Configurations</a>
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
                                <p style={{marginLeft: "40px"}}>&#8220;react-dropzone&#8221;: &#8220;latest&#8221;,</p>
                                <p>&#125;</p>
                            </samp>
                        </div>

                        <p> &#8226; Then on your index.js file include: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import 'semantic-ui-css/semantic.min.css'; </samp>
                        </div>

                        <br/>
                        <p> &#8226; Add the upload.png file to the public folder.
                            <i> Note: you can put your own image on there, as long as its named "upload.png".</i>
                        </p>

                        <p> &#8226; Lastly, import the FileUploadComponent for use: </p>
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
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Available Configurations </h3>

                    <Carousel pauseOnHover={true} interval={20000}>
                        <Carousel.Item>
                            <Image
                                src="./fileupload.gif"
                                alt="Clip demonstrating the FileUploadComponent in its default state."
                                style={{width: "50%"}}
                            />
                            <Carousel.Caption>
                                <h3>Default appearance</h3>
                                <p>This is how the FileUploadComponent appears as an upload field with showFileUploadManager set to true. </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image
                                src="./fileuploadbtn.gif"
                                alt="Clip demonstrating the loader FileUploadComponent as a button."
                                style={{width: "50%"}}
                            />
                            <Carousel.Caption>
                                <h3> <i>uploadByButton </i> = true </h3>
                                <p>On the other hand it can also be set as a button.</p>
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
                        <p> &lt;FileUploadComponent </p>
                        <p>     &#47;&#47;Required Ones </p>
                        <p>     files=&#123;this.getUploadedFiles&#125;</p>
                        <br/>

                        <p>     &#47;&#47;Optional Ones </p>
                        <p>     fileType=&#123;".txt, .pdf"&#125;</p>
                        <p>     fileUploadText=&#123;"Upload Here!"&#125;</p>
                        <p>     showFileUploadManager=&#123;true&#125;</p>
                        <p>     resetUponSubmit=&#123;false&#125;</p>
                        <p>     uploadByBtn=&#123;false&#125;</p>
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
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> files</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>Uses the callback function to return the list of files.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function.</dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"85%"}/>
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

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            <p>A comma-separated list of unique content type specifiers (string format):</p>
                            <p>&#8226; A file extension starting with the STOP character (U+002E). (e.g. .jpg, .png, .doc).</p>
                            <p>&#8226; A valid MIME type with no extensions.</p>
                            <p>&#8226; audio&#47;* representing sound files.</p>
                            <p>&#8226; video&#47;* representing video files.</p>
                            <p>&#8226; image&#47;* representing image files.</p>
                        </dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> fileUploadText</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> The label of the upload field/button.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            <p> &#8226; If uploadByBtn is set to true, the default fileUploadText is “Upload”</p>
                            <p> &#8226; Otherwise, it's “Drag and drop some files here, or click to select files”</p>
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A string
                        </dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> showFileUploadManager</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Specifying whether to show the "files uploaded" queue to the user, and allow them to reset, delete, and submit them.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean
                        </dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> resetUponSubmit</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Determines whether to reset the list of files uploaded upon clicking "submit".
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A boolean</dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> uploadByBtn</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Specifying whether to render a button, or an upload field.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> false
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>A boolean</dd>
                    </dl>

                </section>

                <ScrollUpButton showAtPosition={300}/>
            </div>
        );
    }
}

export default FileUploadComponent;

