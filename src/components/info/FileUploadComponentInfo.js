import React, {Component} from 'react';
import '../../styling/ComponentStyling.css';
import {Carousel, Image} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Prism from "prismjs";

class FileUploadComponentInfo extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <h1 className="display-4" style={{textAlign: "center"}}>File Upload Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <div style={{textAlign: "left", paddingLeft: 30}}>
                        <ol>
                            <li><a className="nav-link glossary" href="#demo">Available Configurations</a></li>
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
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Available Configurations </h3>

                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img
                                src="./fileupload.gif"
                                alt="Clip demonstrating the FileUploadComponent in its default state."
                            />
                            <Carousel.Caption>
                                <h3>Default appearance</h3>
                                <p>This is how the FileUploadComponent appears as an upload field with showFileUploadManager set to true. </p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                src="./fileuploadbtn.gif"
                                alt="Clip demonstrating the loader FileUploadComponent as a button."
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
                <hr/>
                <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                    <section className={"codeSampleImplementation"}>
                        <pre className="language-javascript">
                            <code>
                                {fileUploadSampleCode}
                            </code>
                        </pre>
                    </section>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <hr/>
                <section id={"props"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Props </h3>

                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> files</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">Uses the callback function to return the list of files.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> A callback function.</dd>
                    </dl>

                    {/*====================== Additional Section ======================*/}

                    <hr width={"95%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> fileType</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> Determines the file type that the file uploader will accept.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> "" (which will accept any file type).
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">
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
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> allowMultiUpload</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> Specifying whether to allow user to select multiple files for uploading.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">A boolean</dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> fileUploadText</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> The label of the upload field/button.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">
                            <p> &#8226; If uploadByBtn is set to true, the default fileUploadText is “Upload”</p>
                            <p> &#8226; Otherwise, it's “Drag and drop some files here, or click to select files”</p>
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> A string
                        </dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> showFileUploadManager</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> Specifying whether to show the "files uploaded" queue to the user, and allow them to reset, delete, and submit them.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> A boolean
                        </dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> resetUponSubmit</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> Determines whether to reset the list of files uploaded upon clicking "submit".
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> true
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> A boolean</dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9" style={{fontStyle: "italic"}}> uploadByBtn</dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> Specifying whether to render a button, or an upload field.
                        </dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> false
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">A boolean</dd>
                    </dl>

                </section>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        );
    }
}

const fileUploadSampleCode = `<FileUploadComponent
     //Required Ones
     files={this.getUploadedFiles}

     //Optional Ones 
     fileType={".txt, .pdf"}
     fileUploadText={"Upload Here!"}
     showFileUploadManager={true}
     resetUponSubmit={false}
     uploadByBtn={false}
/>
`;

export default FileUploadComponentInfo;

