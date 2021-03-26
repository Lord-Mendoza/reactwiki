import React, {Component} from 'react';
import '../../styling/ComponentStyling.css';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Prism from "prismjs";
import {
    configFileSampleCode,
    implementingComponentSampleCode,
    reducerIDSampleCode,
    reducerSearchIDSampleCode,
    searchColumnSampleCode,
    searchFormColumnCountSampleCode,
    searchFormDefaultSampleCode,
    searchFormFieldContainerSampleCode,
    searchFormFieldsCode, searchFormTableCellConfigSampleCode,
    searchGridColumnWidthsSampleCode,
    searchGridHiddenColumnsSampleCode, searchGridWidthSampleCode,
    searchMenuOptionsSampleCode
} from "../../utilities/constants/SearchFormCodeConstants";

class SearchFormComponentInfo extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <div>

                    <h1 className="display-4" style={{textAlign: "center"}}>Search Form Component</h1>

                    <section data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                        <div style={{textAlign: "left", paddingLeft: 30}}>
                            <ol>
                                <li><a className="nav-link glossary" href="#prereq">Pre-Requisites</a></li>
                                <li><a className="nav-link glossary" href="#implementation">How To Implement</a></li>
                                <li><a className="nav-link glossary" href="#api">Props</a></li>
                                <li><a className="nav-link glossary" href="#configProps">Configuration Props</a></li>

                                <ul>
                                    <li><a className="nav-link glossary" href="#configProps">Setting Up The Fields</a>
                                    </li>
                                    <li><a className="nav-link glossary" href="#customizingFields">Customizing The
                                        Fields</a></li>
                                    <li><a className="nav-link glossary" href="#fieldNavBar">Navigation Bar</a></li>
                                    <li><a className="nav-link glossary" href="#alternateSetup">Alternate Setup</a></li>
                                    <li><a className="nav-link glossary" href="#reduxSetup">Redux Setup For Search
                                        Results</a></li>
                                    <li><a className="nav-link glossary" href="#gridSetup">Setting Up The Grid</a></li>
                                    <li><a className="nav-link glossary" href="#gridCustomization">Customizing the
                                        Grid</a></li>
                                    <li><a className="nav-link glossary" href="#grdiStyling">Styling The Grid</a></li>
                                </ul>
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
                            <p>  &#8226; You need to include the following on your package.json </p>
                            <div style={{paddingLeft: 80}}>
                                <samp>
                                    <p>&#34;dependencies&#34;:    &#123;</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;bootstrap&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;moment&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-bootstrap&#8221;    &#58; &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-data-export&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-datepicker&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-redux&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;react-select&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;redux&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;semantic-ui-css&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;semantic-ui-react&#8221;: &#8220;latest&#8221;,</p>
                                    <p style={{marginLeft: "40px"}}>&#8220;xlsx&#8221;: &#8220;latest&#8221;,</p>
                                    <p>&#125;</p>
                                </samp>
                            </div>

                            <p>  &#8226; Then on your index.js file include: </p>
                            <div style={{paddingLeft: 80}}>
                                <p><samp> import 'bootstrap/dist/css/bootstrap.min.css'; </samp></p>
                                <p><samp> import 'semantic-ui-css/semantic.min.css';</samp></p>
                                <p><samp> import "react-datepicker/dist/react-datepicker.css"; </samp></p>
                            </div>

                            <br/>
                            <p>  &#8226; Lastly, import the FormFieldsComponent for use: </p>
                            <div style={{paddingLeft: 80}}>
                                <samp> import SearchFormComponent from './SearchFormComponent' </samp>
                            </div>
                        </div>
                    </section>

                    {/*=======================================================
                    ====================== Next Section ======================
                    =======================================================*/}
                    <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr/>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> How To Implement </h3>

                        <p style={{textAlign: "left", paddingLeft: 70}}> 1. Create the configuration constant and add
                            all necessary properties. </p>
                        <section className={"codeSampleImplementation"}>
                            <pre className="language-javascript">
                                <code>
                                    {configFileSampleCode}
                                </code>
                            </pre>
                        </section>

                        <p style={{textAlign: "left", paddingLeft: 70}}> 2. Create SearchFormComponent passing in the
                            configuration file. If SearchFormComponent is a child of tab component, and you want it to
                            be able to open another tab, add a handler for opening another tab. </p>

                        <section className={"codeSampleImplementation"}>
                            <pre className="language-javascript">
                                <code>
                                    {implementingComponentSampleCode}
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
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>config</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9"> The configuration file that the component will use for
                                rendering.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> an array of JSON objects whose keys corresponds to the columns
                                prop.
                            </dd>
                        </dl>

                        <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Optional </h5>

                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>tabToOpen</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9"> If SearchFormComponent is a child of TabComponent, then
                                SearchFormComponent uses this callback function to request a tab switch. If the tab
                                switch request comes from selected row(s), or a table cell click, then it will pass
                                these values to the callback.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> a callback function
                                prop.
                            </dd>
                        </dl>
                    </section>

                    <section id={"configProps"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr/>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Configuration Props </h3>

                        <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Form Fields </h5>

                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Setting Up The Fields </h6>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchFormFields</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">The list of search form fields to be generated.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">
                                <p> A JSON object whose keys are the key/id for the fields, and values are objects with
                                    properties "label" and "type". They follow the given format: </p>
                                <p style={{marginLeft: "40px"}}>&lt;<i>key/id of field</i>&gt;: &#123; label: &lt;
                                    <i>label</i>&gt;,
                                    type: &lt;<i>type of field</i>&gt; &#125;</p>

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
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchFormFieldsCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>
                    </section>

                    {/*=============================  Customizing The Fields  ===================================*/}
                    <section id={"customizingFields"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr width={"90%"}/>

                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Customizing The Fields </h6>

                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchFormDefaultValues</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">Specifies the default value for certain form fields.</dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">a JSON an object whose keys correspond to keys in searchFormFields,
                                and whose values are as specified by the developer to be the default values of those
                                specified fields.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchFormDefaultSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchFormFieldsColumnCount</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">
                                Specifies the number of columns that the form fields will span to.
                                <ul>
                                    <li>Supports values 2, 3, and 4</li>
                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">number</dd>

                            <dt className="col-sm-3"> Default</dt>
                            <dd className="col-sm-9">2</dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchFormColumnCountSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchFormFieldsContainerWidth</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">Specifies the width that the search form fields will expand to.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">a CSS-supported width value (px, %, etc.)</dd>

                            <dt className="col-sm-3"> Default</dt>
                            <dd className="col-sm-9">'fit-content'</dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchFormFieldContainerSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>
                    </section>

                    {/*============================= Search Fields Navigation Bar ===================================*/}
                    <hr width={"90%"}/>

                    <section id={"fieldNavBar"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Navigation Bar </h6>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>hasNavOptions</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">Specifies whether to display the nav options bar</dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">boolean</dd>

                            <dt className="col-sm-3"> Default</dt>
                            <dd className="col-sm-9">true</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchMenuOptions</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">Specifies additional nav menu options besides performing search, or
                                resetting the fields
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">
                                an array of JSON objects whose properties are listed below:
                                <ul>
                                    <li><b> key:</b> the key of the option. This is internally used for mapping the
                                        selected nav option with its onClickHandler.
                                    </li>
                                    <li><b> title:</b> the title/label to show for the option</li>
                                    <li>(if desired) one of the following:</li>
                                    <ul>
                                        <li><b> image:</b> the file (.png, .gif, etc.) to show to the left of the option
                                            title
                                        </li>
                                        <li><b> icon:</b> the icon to show to the left of the option title; the icon
                                            corresponds to the name value of the icon found here:
                                            https://react.semantic-ui.com/elements/icon/
                                        </li>
                                    </ul>
                                    <li><b> dependsOnRowSelection:</b> boolean where, if allowRowSelection is set to
                                        true, then the row(s) data selected will be passed on to the onClickHandler
                                        function; if no selections are made before the user toggled this option, then an
                                        alert message will appear telling the user to make row selection(s) first.
                                    </li>
                                    <li><b> action:</b> a string that specifies the action. Can be one of the following
                                        listed below OR can be omitted if onClickHandler just needs to get called.
                                    </li>
                                    <ul>
                                        <li><b> "downloadFile" </b>= fires the callback function on the onClickHandler
                                            property. The onClickHandler should handle the downloading of the file.
                                        </li>
                                        <li><b> "openPopup" </b>= triggers a popup to open, and will fire the
                                            popupContent callback to get the content to be displayed inside the popup.
                                        </li>
                                    </ul>
                                    <li>(if action is set to "downloadFile") <b> onClickHandler </b>= a hook callback
                                        function that passes in the following parameters:
                                    </li>
                                    <ul>
                                        <li><i> rowsArray </i>= an array of row objects where, for each object, contains
                                            keys that correspond to searchGridColumns, and its values are its
                                            corresponding column value
                                        </li>
                                        <li><i> resetCallback </i>= a callback function to be triggered by the hook
                                            callback to specify whenever the action performed is completed; this is
                                            important to get called so that the dropdown option will trigger the
                                            download again
                                        </li>
                                    </ul>
                                    <li>(if action is "openPopup") the following properties:</li>
                                    <ul>
                                        <li><b> popupHeader:</b> a string that is the title of the popup</li>
                                        <li><b> popupClassName:</b> a string that is passed on as a classname for the
                                            popup for CSS styling; helps with specifying the margins (which determines
                                            the width of the specific popup) via CSS
                                        </li>
                                        <li><b> popupContent:</b> a hook callback function that will handle the contents
                                            to display inside the popup. SearchFormComponent passes in the following
                                            parameters:
                                        </li>
                                        <ul>
                                            <li><i> rowsArray </i>= an array of row objects where, for each object,
                                                contains keys that correspond to searchGridColumns, and its values are
                                                its corresponding column value
                                            </li>
                                            <li><i> resetCallback </i>= a callback function that can be used by the hook
                                                callback function to specify whethe to close the popup, or (if the
                                                SearchFormComponent is a child of TabComponent) to transfer tabs.
                                            </li>
                                        </ul>
                                    </ul>
                                    <li><b> subMenuItems:</b> an array of objects to appear as a sub-menu for the search
                                        menu nav option.
                                    </li>
                                    <ul>
                                        <li>Its objects contains the same properties as searchMenuOptions since, when
                                            the user selects them, they use the same internal handling.
                                        </li>
                                        <li>These properties include: key, title, image/icon, dependsOnRowSelection,
                                            action, onClickHandler, popupHeader, popupClassName, and popupContent.
                                        </li>
                                    </ul>
                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchMenuOptionsSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>
                    </section>

                    {/*-----Next Entry-----*/}
                    <hr width={"90%"}/>

                    <section id={"alternateSetup"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Alternate Setup </h6>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>isMetrics</i></dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">
                                Specifies whether the SearchFormComponent should be formatted as a filterable metrics
                                grid.
                                <br/>
                                If set to true:
                                <ul>
                                    <li>The "Reset" and "Search" nav options are replaced with "Filter"</li>
                                    <li>The grid performs the search upon first viewing rather than needing to press
                                        some "Search" button first
                                    </li>
                                    <li>The grid has a refresh button on the top right</li>
                                </ul>

                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">boolean</dd>

                            <dt className="col-sm-3"> Default</dt>
                            <dd className="col-sm-9">false</dd>
                        </dl>
                    </section>

                    {/*================================= Grid Section ======================================*/}
                    <hr width={"95%"}/>
                    <section id={"reduxSetup"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Grid </h5>

                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Redux Setup For Search
                            Results </h6>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>reducerID</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">The sequence of properties that react-redux will use to pin-point
                                the exact state to be used by the result grid in locating its row values
                            </dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">An array of strings</dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {reducerIDSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchID</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Specifies the ID to be used by react-redux in locating the result
                                grid's rows, as well as saving them (see searchHandler below)
                            </dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">A string</dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {reducerSearchIDSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchHandler</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">
                                The callback function where the user's input in the search fields are passed in after
                                clicking "Search" or "Filter".
                                <br/>
                                Passes in the following parameters to the specified callback function:
                                <ul>
                                    <li><i>searchID</i>: same as searchID above</li>
                                    <li><i>searchCriteria</i>: an object whose keys correspond to searchFormField's
                                        keys, and values are as inputted by the user
                                    </li>
                                </ul>
                            </dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">A callback function</dd>
                        </dl>
                    </section>

                    {/*================================ Setting Up the Grid =====================================*/}
                    <hr width={"90%"}/>

                    <section id={"gridSetup"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Setting Up The Grid </h6>

                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchGridColumns</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Specifies the columns of the grid.</dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                an array of JSON objects whose properties are:
                                <ul>
                                    <li><i>name</i>: the key/id of the column used for mapping the row values to the
                                        column
                                    </li>
                                    <li><i>title</i>: the label of the column</li>
                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchColumnSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>allowRowSelection</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Provides an ability to select rows in the grid.</dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                a boolean where, if set to true, adds a checkbox to the left of the rows, and tracks the
                                selected rows
                            </dd>

                            <dt className="col-sm-3">Default</dt>
                            <dd className="col-sm-9">false</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>allowRowDetails</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Allows for rows to be collapsed to view additional details.</dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                a boolean were, if set to true, it renders a chevron-right icon to the left of the row
                                indicating it is collapsable for showing row details.
                            </dd>

                            <dt className="col-sm-3" style={{color: "red"}}>Needs to Have</dt>
                            <dd className="col-sm-9"><i>rowDetailsContent</i></dd>

                            <dt className="col-sm-3">Default</dt>
                            <dd className="col-sm-9">false</dd>
                        </dl>
                    </section>

                    {/*=============================== Customizing the Grid =====================================*/}
                    <hr width={"90%"}/>

                    <section id={"gridCustomization"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Customizing the Grid</h6>

                        {/*-----Next Entry-----*/}
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>rowDetailsContent</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">The content to display in the expanded row-details.</dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                a hook callback. Passes in the collapsed row object which contains keys that correspond
                                to searchGridColumns, and its values are its corresponding column value.
                            </dd>

                            <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                            <dd className="col-sm-9"><i>rowDetailsContent == true</i></dd>

                            <dt className="col-sm-3">Default</dt>
                            <dd className="col-sm-9">false</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>tableCellConfig</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Specifies how the table cells should be configured for displaying
                                and interactions.
                            </dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                a JSON object whose keys correspond to those in searchGridColumns, and values are
                                objects with the following keys:
                                <ul>
                                    <br/>
                                    <li><b> action </b>: the type of action that the tableCell will have. Can be one of
                                        the
                                        following:
                                    </li>
                                    <ul>
                                        <li><i>"downloadFile"</i> = fires the onClickHandler callback, which should
                                            handle the
                                            downloading of the file
                                        </li>
                                        <li><i>"openDropdown"</i> = renders a dropdown icon where, upon hovering with
                                            the
                                            cursor, shows a menu based on dropdownOption
                                        </li>
                                        <li><i>"openPopup"</i> = triggers a popup to open, and will fire the
                                            popupContent
                                            callback to get the content to be displayed inside the popup.
                                        </li>
                                        <li><i>"transferTab"</i> = if searchForm is rendered as a child of TabComponent,
                                            and
                                            the "tabToOpen" prop is specified, then clicking the tableCell will trigger
                                            the TabComponent to open another tab whose key corresponds to targetTab
                                        </li>
                                    </ul>
                                    <br/>
                                    <li><b> onClickHandler </b>: a hook callback function that will handle the onClick
                                        on the
                                        table cell based on the action type selected. Passes in the following
                                        parameters:
                                    </li>
                                    <ul>
                                        <li><i>rowData</i> = the data of the whole row as an object whose keys
                                            correspond to
                                            searchGridColumns, and values are its corresponding column value
                                        </li>
                                        <li><i>resetCallback</i> = a callback function to be triggered by the hook
                                            callback to
                                            specify whenever the action performed is completed; this is important to get
                                            called so that the table cell can be clicked again
                                        </li>
                                    </ul>
                                    <br/>
                                    <li> (if action is "openPopup") the following properties:</li>
                                    <ul>
                                        <li><b> popupHeader </b>: a string that is the title of the popup</li>
                                        <li><b> popupClassName </b>: a string that is passed on as a classname for the
                                            popup for
                                            styling
                                        </li>
                                        <li><b> popupContent </b>: a hook callback function that will handle the
                                            contents to
                                            display inside the popup. Passed in the following parameters:
                                        </li>
                                        <ul>
                                            <li><i>rowData</i> = the data of the whole row as an object whose keys
                                                correspond
                                                to searchGridColumns, and values are its corresponding column value
                                            </li>
                                            <li><i>resetCallback</i> = a callback function that can be used by the hook
                                                callback function to specify whethe to close the popup, or (if the
                                                SearchFormComponent is a child of TabComponent) to transfer tabs.
                                            </li>
                                        </ul>
                                    </ul>
                                    <br/>
                                    <li> (if action is "openDropdown") <b>dropdownOptions</b>: an array of objects whose
                                        keys
                                        contain the following properties:
                                    </li>
                                    <ul>
                                        <li><i>key:</i> the key of the option</li>
                                        <li><i>title:</i> the title/label to show for the option</li>
                                        <li> (if desired) one of the following:</li>
                                        <ul>
                                            <li><i>image:</i> the file (.png, .gif, etc.) to show to the left of the
                                                option
                                                title
                                            </li>
                                            <li><i>icon:</i> the icon to show to the left of the option title; the icon
                                                corresponds to the name value of the icon found here:
                                                https://react.semantic-ui.com/elements/icon/
                                            </li>
                                        </ul>
                                        <li><i>action:</i> a string of one of two values:</li>
                                        <ul>
                                            <li><i>"downloadFile"</i> = fires the callback function on the
                                                onClickHandler
                                                property found in the same dropdownOption object, NOT tableCellConfig's.
                                                The onClickHandler should handle the downloading of the file.
                                            </li>
                                            <li><i>"transferTab"</i> = see previous "transferTab" description as it
                                                executes
                                                the same.
                                            </li>

                                        </ul>
                                        <li><i>onClickHandler</i> = a hook callback function that passes in the
                                            following
                                            parameters for downloading files:
                                        </li>
                                        <ul>
                                            <li><i>rowData</i> = the data of the whole row as an object whose keys
                                                correspond
                                                to searchGridColumns, and values are its corresponding column value
                                            </li>
                                            <li><i>resetCallback</i> = a callback function to be triggered by the hook
                                                callback to specify whenever the action performed is completed; this is
                                                important to get called so that the dropdown option will trigger the
                                                download again
                                            </li>
                                        </ul>
                                    </ul>

                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchFormTableCellConfigSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchGridHiddenColumns</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Specifies which columns to hide from the grid.</dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                a string array whose elements corresponds to keys in searchGridColumns.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchGridHiddenColumnsSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>
                    </section>

                    {/*================================ Styling the Grid =====================================*/}
                    <hr width={"90%"}/>

                    <section id={"grdiStyling"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Styling The Grid </h6>

                        {/*-----Next Entry-----*/}
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchGridColumnWidths</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Specifies the widths that each column will span to.</dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                a JSON object whose keys are the key/id of the column corresponding to
                                searchGridColumns, and values (of number type) are the widths (in px)
                                <ul>
                                    <li>if unspecified, all columns will be of width 180px</li>
                                    <li>if specified, but some columns are omitted, then omitted columns will be of
                                        width 180px
                                    </li>
                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchGridColumnWidthsSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>
                        <dl className="row">
                            <dt className="col-sm-3">Name</dt>
                            <dd className="col-sm-9"><i>searchGridWidth</i></dd>

                            <dt className="col-sm-3">Description</dt>
                            <dd className="col-sm-9">Specifies the width that the grid will expand to. Going above this
                                width (by expanding columns) will add horizontal scrollbars.
                            </dd>

                            <dt className="col-sm-3">Value</dt>
                            <dd className="col-sm-9">
                                a string of CSS-supported width (px, em, %, etc.)
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {searchGridWidthSampleCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                    </section>
                </div>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        )
    }
}

export default SearchFormComponentInfo;