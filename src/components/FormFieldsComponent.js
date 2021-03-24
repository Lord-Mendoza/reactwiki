import React, {Component} from 'react';
import '../styling/ComponentStyling.css';
import {Carousel, Nav} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class FormFieldsComponent extends Component {
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

                    <h1 className="display-4" style={{textAlign: "center"}}>Form Fields Component</h1>

                    <section data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                        <p style={{textAlign: "left", paddingLeft: 50}}>
                            <a className="nav-link glossary" href="#prereq">Pre-Requisites</a>
                            <a className="nav-link glossary" href="#implementation">Sample Implementation</a>
                            <a className="nav-link glossary" href="#api">APIs</a>
                        </p>
                    </section>

                    {/*=======================================================
                    ====================== Next Section ======================
                    =======================================================*/}
                    <section id={"prereq"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr/>

                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Pre-Requisites </h3>

                        <div style={{textAlign: "left", paddingLeft: 70}}>
                            <p>  &#8226; You need to include the following on your package.json </p>
                            <div style={{paddingLeft: 80}}>
                                <samp>
                                    <p>&#34;dependencies&#34;:    &#123;</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-bootstrap&#8221;    &#58; &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;bootstrap&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-select&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-datepicker&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;moment&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;semantic-ui-css&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;semantic-ui-react&#8221;: &#8220;latest&#8221;,</p>
                                    <p>&#125;</p>
                                </samp>
                            </div>

                            <p>  &#8226; Then on your index.js file include: </p>
                            <div style={{paddingLeft: 80}}>
                                <samp> import 'bootstrap/dist/css/bootstrap.min.css'; </samp>
                            </div>

                            <br/>
                            <p>  &#8226; Lastly, import the FormFieldsComponent for use: </p>
                            <div style={{paddingLeft: 80}}>
                                <samp> import FormFieldsComponent from './FormFieldsComponent' </samp>
                            </div>
                        </div>
                    </section>

                    {/*=======================================================
                    ====================== Next Section ======================
                    =======================================================*/}
                    <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr/>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                        <section style={{width: '600px', margin: "0 auto", textAlign: "left"}}>
                            <pre className="prettyprint lang-json">
                                <code>
                                    <br/>
                                    <p> &lt;FormFieldsComponent </p>
                                    <p>      &#47;&#47;Required Ones </p>

                                    <p style={{marginLeft: "40px"}}> formFields = &#123; </p>
                                            <p style={{marginLeft: "60px"}}> name: &#123;label: "Name", type: "text"&#125;, </p>
                                            <p style={{marginLeft: "60px"}}> dateOfBirth: &#123;label: "Date of Birth", type: "date"&#125;, </p>
                                            <p style={{marginLeft: "60px"}}> collegeYear: &#123;</p>
                                                <p style={{marginLeft: "80px"}}>label: "College Year",</p>
                                                <p style={{marginLeft: "80px"}}>type: &#123;</p>
                                                    <p style={{marginLeft: "120px"}}>dropdown: [</p>
                                                        <p style={{marginLeft: "120px"}}>&#123;label: "Freshman", value: "1"&#125;</p>
                                                        <p style={{marginLeft: "120px"}}>&#123;label: "Sophomore", value: "2"&#125;</p>
                                                        <p style={{marginLeft: "120px"}}>&#123;label: "Junior", value: "3"&#125;</p>
                                                        <p style={{marginLeft: "120px"}}>&#123;label: "Senior", value: "4"&#125;</p>
                                                    <p style={{marginLeft: "120px"}}>]</p>
                                                <p style={{marginLeft: "80px"}}>&#125;</p>
                                            <p style={{marginLeft: "60px"}}>&#125;,</p>
                                            <p style={{marginLeft: "60px"}}>extracurricularActivities: &#123;</p>
                                                <p style={{marginLeft: "80px"}}>label: "Extracurricular Activities",</p>
                                                <p style={{marginLeft: "80px"}}>type: &#123;dropdown: &lt;GetActivitiesOptions/&gt;, </p>
                                                <p style={{marginLeft: "80px"}}>isClearable: true,</p>
                                                <p style={{marginLeft: "80px"}}>isMultiSelect: true</p>
                                            <p style={{marginLeft: "60px"}}>&#125; </p>
                                    <p style={{marginLeft: "40px"}}>&#125;, </p>
                                    <p style={{marginLeft: "40px"}}>formFieldsData = &#123; </p>
                                        <p style={{marginLeft: "60px"}}>name: "John", </p>
                                        <p style={{marginLeft: "60px"}}>dateOfBirth: "11/19/1983", </p>
                                        <p style={{marginLeft: "60px"}}>collegeYear: "1",</p>
                                        <p style={{marginLeft: "60px"}}>extracurricularActivities: ["baseball", "soccer", "chess"]</p>
                                    <p style={{marginLeft: "40px"}}>&#125;, </p>
                                    <p>     handlerFunction=&#123;this.state.handleFormFieldValue&#125;,</p>
                                    <br/>

                                    <p>     &#47;&#47;Optional Ones </p>

                                    <p style={{marginLeft: "40px"}}>requiredFields = &#123;["Name", "Date of Birth"]&#125;,</p>
                                    <p style={{marginLeft: "40px"}}>columnCount=&#123;3&#125;,</p>
                                    <p style={{marginLeft: "40px"}}>fieldContainerWidth = &#123;'630px'&#125;</p>
                                    <p style={{marginLeft: "40px"}}>formClassName=&#123;'studentInfo'&#125;</p>
                                    /&gt;
                                </code>
                            </pre>
                        </section>
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
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> formFields
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> The list of form fields to be
                                generated.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                <p> A JSON object whose keys are the key/id for the fields, and values are objects with
                                    properties "label" and "type".</p>

                                <p>The different types supported are:</p>
                                <ul>
                                    <li><b>"number"</b> = restricts input to number only</li>
                                    <li><b>"double"</b> = restricts input to double only (&lt;number&gt;.&lt;digits
                                        only&gt;); will append decimal if it is missing from the user's input.
                                    </li>
                                    <li><b>"date"</b> = shows a datepicker, and saves the selection in "mm/dd/yyyy"
                                        format
                                    </li>
                                    <li><b>"text"</b> = allows any input</li>
                                    <li><b>"textarea"</b> = shows a textarea that allows for any input</li>
                                    <li><b>"data"</b> = does not render an input field; only displays data</li>
                                    <li><b>"multilineData"</b> = same as above, but shows a button which, upon clicking,
                                        opens a popup that shows the multi-line data; if value is empty, then the button
                                        is not shown.
                                    </li>
                                    <li><b>"currencyData"</b> = converts a double value (not a string) to currency
                                        format, along with dollar sign ($)
                                    </li>
                                    <li><b>&#123;dropdown: &lt;dropdown values&gt;&#125;</b> = displays a select field
                                        <ul>
                                            <li>dropdown values can be one of the following</li>
                                            <ul>
                                                <li>an array of objects in this format:</li>
                                                <p style={{marginLeft: "60px"}}>&#123;label: &lt;label&gt;,
                                                    value: &lt;value&gt;, color: &lt;color&gt;&#125;</p>
                                                <li>a hook callback function that handles the asynchronous retrieval of
                                                    dropdown options, and returns a &lt;Select/&gt; object
                                                </li>
                                            </ul>

                                            <li>There are two optional properties available for added features:
                                                <ul>
                                                    <li><b>"multiselect"</b> = boolean that allows for multiple
                                                        selection of values; is false by default if unspecified
                                                    </li>
                                                    <li><b>"isClearable"</b> = boolean that allows for the "x" symbol to
                                                        appear on the select box allowing it to be clearable upon button
                                                        click; is false by default
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section style={{width: "500px"}}>
                                    <pre className="prettyprint lang-jsx">
                                        <code>
                                            <p> formFields = &#123; </p>
                                            <p style={{marginLeft: "40px"}}> name: &#123;label: "Name", type: "text"&#125;, </p>
                                            <p style={{marginLeft: "40px"}}> dateOfBirth: &#123;label: "Date of Birth", type: "date"&#125;, </p>
                                            <p style={{marginLeft: "40px"}}> collegeYear: &#123;</p>
                                                <p style={{marginLeft: "60px"}}>label: "College Year",</p>
                                                <p style={{marginLeft: "60px"}}>type: &#123;</p>
                                                    <p style={{marginLeft: "80px"}}>dropdown: [</p>
                                                        <p style={{marginLeft: "100px"}}>&#123;label: "Freshman", value: "1"&#125;</p>
                                                        <p style={{marginLeft: "100px"}}>&#123;label: "Sophomore", value: "2"&#125;</p>
                                                        <p style={{marginLeft: "100px"}}>&#123;label: "Junior", value: "3"&#125;</p>
                                                        <p style={{marginLeft: "100px"}}>&#123;label: "Senior", value: "4"&#125;</p>
                                                    <p style={{marginLeft: "80px"}}>]</p>
                                                <p style={{marginLeft: "60px"}}>&#125;</p>
                                            <p style={{marginLeft: "40px"}}>&#125;,</p>
                                            <p style={{marginLeft: "40px"}}>extracurricularActivities: &#123;</p>
                                                <p style={{marginLeft: "60px"}}>label: "Extracurricular Activities",</p>
                                                <p style={{marginLeft: "60px"}}>type: &#123;dropdown: &lt;GetActivitiesOptions/&gt;, </p>
                                                <p style={{marginLeft: "60px"}}>isClearable: true,</p>
                                                <p style={{marginLeft: "60px"}}>isMultiSelect: true</p>
                                            <p style={{marginLeft: "40px"}}>&#125; </p>
                                            <p>&#125; </p>
                                        </code>
                                    </pre>
                                </section>

                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> formFieldsData
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> The current values for each form
                                field.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> A JSON object whose keys correspond to
                                keys/ids of formFields, and values are the current values for those fields.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                <section style={{width: "550px"}}>
                                    <pre className="prettyprint lang-jsx">
                                        <code>
                                            <p> formFieldsData = &#123; </p>
                                            <p style={{marginLeft: "40px"}}>name: "John", </p>
                                            <p style={{marginLeft: "40px"}}>dateOfBirth: "11/19/1983", </p>
                                            <p style={{marginLeft: "40px"}}>collegeYear: "1",</p>
                                            <p style={{marginLeft: "40px"}}>extracurricularActivities: ["baseball", "soccer", "chess"]</p>
                                            <p>&#125; </p>
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> handlerFunction
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                <p>The callback function where the user's input are passed in as they revise a field.
                                    Must have the following parameters for proper flow: </p>
                                <p style={{marginLeft: "40px"}}> (e, &#123;name, value&#125;) </p>
                                <ul>
                                    <li><i>name</i> corresponds to the key of the form field</li>
                                    <li><i>value</i> is the user's input.</li>
                                    <li>
                                        <i>e</i> must be used as the source of the value if the field passed in is a
                                        dropdown type.
                                        You can include the following code to assist with this handling:
                                    </li>
                                </ul>

                                <section style={{width: '1000px'}}>
                                    <pre className="prettyprint lang-jsx">
                                        <code>
                                            <p>let dropdownFields = Object.keys(searchFormFields).filter(field => (typeof searchFormFields[field]["type"] === "object"));</p>
                                            <p>if (dropdownFields.includes(name)) &#123; </p>
                                                <p style={{marginLeft: "40px"}}>if (Array.isArray(e))</p>
                                                    <p style={{marginLeft: "60px"}}>value = e;</p>
                                                <p style={{marginLeft: "40px"}}>else</p>
                                                    <p style={{marginLeft: "60px"}}>value = e && e["value"] ? e["value"] : null;</p>
                                            <p style={{marginBottom: "0"}}>&#125;</p>
                                        </code>
                                    </pre>
                                </section>
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function</dd>
                        </dl>

                        {/*====================== Additional Section ======================*/}

                        <hr width={"90%"}/>
                        <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional
                            Customizations </h5>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> requiredFields
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> Specifies which fields to add a red
                                asterisk (*) after the form label to indicate a required field.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> An array of strings where each string
                                corresponds to a key/id in formFields.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                <section style={{width: "400px"}}>
                                    <pre className="prettyprint lang-jsx">
                                        <code>
                                            <p style={{marginBottom: "0"}}> requiredFields = &#123;["Name", "Date of Birth"]&#125;</p>
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> columnCount</dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                Specifies the number of columns to divide the formFields.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> A number of either 2, 3, or 4.</dd>

                            <dt className="col-sm-3"> Default</dt>
                            <dd className="col-sm-9"> 2</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9"
                                style={{textAlign: "left", fontStyle: "italic"}}> fieldContainerWidth
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                Specifies the width to span the form fields by.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> A string that can either be some
                                length unit (px, cm, etc.), percentage (%), or any CSS-supported width value.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                <section style={{width: "400px"}}>
                                    <pre className="prettyprint lang-jsx">
                                        <code>
                                            <p style={{marginBottom: "0"}}> fieldContainerWidth = &#123;'630px'&#125;</p>
                                        </code>
                                    </pre>
                                </section>
                            </dd>

                            <dt className="col-sm-3"> Default</dt>
                            <dd className="col-sm-9"> "fit-content"</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> formClassName
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}>
                                Specifies a CSS class to wrap the FormFieldsComponent by for external CSS styling.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9" style={{textAlign: "left"}}> A string</dd>
                        </dl>

                    </section>

                </div>

                <ScrollUpButton showAtPosition={300}/>
            </div>
        );
    }
}

export default FormFieldsComponent;