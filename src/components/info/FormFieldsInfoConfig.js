import React from "react";

export const formFieldsInfoConfig = {
    title: "Form Fields Component",
    defaultMenuItemSelected: "required",
    menuItems: [
        {key: "required", label: "Required"},
        {key: "formValidation", label: "Form Validation"},
        {key: "formSubmission", label: "Form Submission"},
        {
            key: "styling", label: "Styling",
            subMenuItems: [
                {key: "columnCount", label: "Fields Column Count"},
                {key: "width", label: "Width"},
                {key: "className", label: "CSS Class Name"},
            ]
        }
    ],
    contentItems: {
        required: {
            introduction: <div>The FormFieldsComponent requires three properties to render properly: &nbsp;
                <code className={"property"}>formFields</code>,
                <code className={"property"}>formFieldsData</code>, and
                <code className={"property"}>handlerFunction</code>.
            </div>,
            properties: [
                {
                    name: "formFields",
                    description: "The list of form fields to be generated.",
                    value: <span>A JSON object whose keys are the key/id for the fields, and values are objects with properties:
                        <ul>
                            <li><code className="property">label</code>- the label for the field.</li>
                            <li><code className="property">type</code>- the type of the field.</li>
                        </ul>
                        The different types supported are:
                        <ul>
                                    <li><code className="property">number</code> = restricts input to number only</li>
                                    <li><code
                                        className="property">double</code> = restricts input to double only (&lt;number&gt;.&lt;digits
                                        only&gt;); will append decimal if it is missing from the user's input.
                                    </li>
                                    <li><code className="property">date</code> = shows a datepicker, and saves the selection in "mm/dd/yyyy"
                                        format
                                    </li>
                                    <li><code className="property">text</code> = allows any input</li>
                                    <li><code className="property">textarea</code> = shows a textarea that allows for any input</li>
                                    <li><code className="property">boolean</code> = shows a dropdown field with two options: "Yes" or "No", whose values are boolean "true" and "false", respectively.</li>
                                    <li><code className="property">data</code> = does not render an input field; only displays data</li>
                                    <li><code className="property">multilineData</code> = same as above, but shows a button which, upon clicking,
                                        opens a popup that shows the multi-line data; if value is empty, then the button
                                        is not shown.
                                    </li>
                                    <li><code className="property">currencyData</code> = converts a double value (not a string) to currency
                                        format, along with dollar sign ($)
                                    </li>
                                    <br/>

                                    <li><code className="property">&#123;dropdown: &lt;
                                        <i>dropdown values</i> &gt;&#125;</code> = displays a
                                        select field
                                        <ul>
                                            <li><code className="property">&lt; <i>dropdown values</i> &gt;&#125;</code> can be one of the following</li>
                                            <ul>
                                                <li>an array of objects in this format:
                                                            <code
                                                                className="property">&#123;label: <i>&lt;label</i>&gt;,
                                                                value: <i>&lt;value</i>&gt;, color: <i>&lt;color</i>&gt;&#125;</code>
                                                </li>
                                                <li>a hook callback function that handles the asynchronous retrieval of
                                                    dropdown options, and returns a <code
                                                        className="property">&lt;Select/&gt;</code> object
                                                </li>
                                            </ul>

                                            <li>There are three optional properties available for added features:
                                                <ul>
                                                    <li><code className="property">menuWidth</code> = the width that the dropdown options will
                                                        expand
                                                        to. Ideally, this property should be set wide enough where the
                                                        options are readable in one line. By default, the width expands
                                                        to the same width as the select field.
                                                    </li>
                                                    <li><code className="property">multiselect</code> = boolean that allows for multiple
                                                        selection of values; is false by default if unspecified
                                                    </li>
                                                    <li><code className="property">isClearable</code> = boolean that allows for the "x" symbol to
                                                        appear on the select box allowing it to be clearable upon button
                                                        click; is false by default
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <br/>

                                    <li><code className="property">&#123; lookupValue: &#123;
                                        <i>specified properties</i> &#125;&#125;</code> =
                                        displays a text field with a green search button to its right that triggers a
                                        lookup popup to show. The popup contains a SearchFormComponent for looking up
                                        a value, and will pre-populate the FormComponent's field once a selection is
                                        made from the popup.
                                        <ul>
                                            <li><code className="property">&#123;
                                                <i>specified properties</i> &#125;</code> is a JSON object that includes the following
                                                properties:
                                                <ul>
                                                    <li><code className="property">searchFormFields</code> = similar to
                                                        SearchFormComponent/searchFormFields
                                                    </li>
                                                    <li><code className="property">searchGridColumns</code> = similar to
                                                        SearchFormComponent/searchGridColumns
                                                    </li>
                                                    <li><code className="property">reducerID</code> = similar to SearchFormComponent/reducerID</li>
                                                    <li><code className="property">searchID</code> = similar to SearchFormComponent/searchID</li>
                                                    <li><code className="property">searchHandler</code> = similar to
                                                        SearchFormComponent/searchHandler
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>There are three optional properties available for added features:
                                                <ul>
                                                    <li><code className="property">additionalFieldsToPopulate</code> = an string array whose
                                                        elements correspond to the keys of the <code
                                                            className="property">formFields</code> object.
                                                        When a selection is made from the lookup popup result grid,
                                                        these additional fields will be populated based on the selected
                                                        row data.

                                                    </li>
                                                    <li><code className="property">popupClassName</code> = the CSS classname for this popup. It can
                                                        be used to alter its width, and other CSS-related styling.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                        </span>,
                    example: `formFields = {
    name: {label: "Name", type: "text"},
    dateOfBirth: {label: "Date of Birth", type: "date"},
    collegeYear: {
        label: "College Year",
        type: {
            dropdown: [
                {label: "Freshman", value: 1}
                {label: "Sophomore", value: 2}
                {label: "Junior", value: 3}
                {label: "Senior", value: 4}
            ]
        }
    },
    studentID: {
        label: "Student ID",
        type: {
            lookupValue: {
                searchFormFields: {
                    name: {label: "Name", type: "text"},
                    dateOfBirth: {label: "Date of Birth", type: "date"},
                },
                searchGridColumns: {
                     {name: "studentID", title: ""},
                     {name: "name", title: "Name"},
                     {name: "dateOfBirth", title: "Date of Birth"},
                },
                additionalFieldsToPopulate: ["name", "dateOfBirth"],
                
                reducerID: ["students", "info"],
                searchID: "studentID",
                searchHandler: this.getStudentSearchResults,
                
                popupClassName: "studentSearchLookupPopup"
            }
        }
    }
}`
                },
                {
                    name: "formFieldsData",
                    description: "The current values for each form field.",
                    value: <span>A JSON object whose keys correspond to keys/ids of <code
                        className="property">formFields</code>, and values are the current
                        values for those fields.</span>,
                    example: `formFieldsData = {
    name: "John",
    dateOfBirth: "11/19/1983",
    collegeYear: 1,
    extracurricularActivities: ["baseball", "soccer", "chess"]
}`
                },
                {
                    name: "handlerFunction",
                    description: <span>
                        <p>The callback function where the user's input are passed in as they revise a field.
                                    Must have the following parameters for proper flow: </p>
                                <code className={"property"}>(<i>e</i>, &#123;<i>name</i>, <i>value</i>&#125;) </code>
                                <ul>
                                    <li><code className={"property"}><i>e</i></code> is the event object</li>
                                    <li><code className={"property"}><i>name</i></code> corresponds to the key of the form field</li>
                                    <li><code className={"property"}><i>value</i></code> is the users input.</li>
                                </ul>
                    </span>,
                    value: "A callback function",
                    example: `handlerFunction = { this.state.handleFormFieldValue} `
                }
            ]
        },
        formValidation: {
            introduction: <div>You can have FormFieldsComponent check that required fields have values before
                submitting.</div>,
            properties: [
                {
                    name: "requiredFields",
                    description: <span>
                        Specifies which fields to require having values for, and adds a red asterisk (<b><span
                        style={{color: '#db2828'}}>*</span></b>)
                        after the form label to indicate a required field.
                    </span>,
                    value: <span>An array of strings where each string corresponds to a key/id in <code
                        className={"property"}>formFields</code>.</span>,
                    example: `requiredFields = {["Name", "Date of Birth"]}`
                }
            ]
        },
        formSubmission: {
            introduction: "FormFieldsComponent supports submitting the form to a callback function upon clicking the 'Enter' key on any of the fields.",
            properties: [
                {
                    name: "onFormSubmit",
                    description: <span>
                        <p>The function that gets called whenever the user submits the form by clicking 'Enter'.</p>
                        Note that it will not pass any parameters, it simply calls the callback function to signify that
                        the data under <code className={"property"}>formFieldsData</code> is ready to be submitted.
                    </span>,
                    value: "A callback function",
                    example: `onFormSubmit = { this.submitForm }`
                }
            ]
        },
        columnCount: {
            introduction: "The form fields can consolidate all fields into one column, or up to 4 columns.",
            properties: [
                {
                    name: "columnCount",
                    description: "Specifies the number of columns to divide the formFields.",
                    value: "An integer of either 2, 3, or 4.",
                    defaultValue: 2,
                    example: `columnCount = { 4 }`
                }
            ]
        },
        width: {
            introduction: "The form fields can be given a specific width to spread across to.",
            properties: [
                {
                    name: "fieldContainerWidth",
                    description: "Specifies the width of the form fields.",
                    value: "a string that is a CSS-support width value",
                    example: `fieldContainerWidth = {'630px'}`
                }
            ]
        },
        className: {
            introduction: "The form fields can be given a class name for CSS-related customizations.",
            properties: [
                {
                    name: "formClassName",
                    description: "Specifies a CSS class to wrap the FormFieldsComponent by for external CSS styling.",
                    value: "a string",
                    example: `formClassName = { "studentInfoFormFields" }`
                }
            ]
        },
    }
}