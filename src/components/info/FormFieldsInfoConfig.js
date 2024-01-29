import React from "react";

export const formFieldsInfoConfig = {
    title: "Form Fields Component",
    defaultMenuItemSelected: "required",
    menuItems: [
        {key: "required", label: "Required"},
        {key: "fieldTypes", label: "Field Types"},
        {key: "formValidation", label: "Form Validation"},
        {key: "formSubmission", label: "Form Submission"},
        {key: "hiddenFields", label: "Hiding Fields"},
        {key: "disablingFields", label: "Disabling Fields"},
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
                            <li><code className="property">type</code>- the type of the field. Consult the
                                <code className="property">Field Types</code> section to get a full description of all
                                possible types supported, along with their additional configurations.
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

        fieldTypes: {
            introduction: "FormFieldsComponent supports various field types including ones that allow for input, " +
                "view-only data fields, filler field. Each field type has additional configuration properties.",
            properties: [
                {
                    name: "text",
                    description: "allows for any input, including symbols.",
                    notes: <span>
                        There is an additional property available for added feature:
                        <ul>
                        <li><code className="property">maxLength</code> = the maximum number
                            of characters the user can input.
                        </li>
                    </ul>
                    </span>,
                    example: `formFields = {
    name: {
       label: "Name", 
       type: "text"
    } 
}`
                },
                {
                    name: "textarea",
                    description: "shows a textarea that allows for any input.",
                    notes: <span>There are additional properties available for added features:
                        <ul>
                            <li>
                                <code className="property">resizable</code> = a boolean <code
                                className="property">true</code> or <code
                                className="property">false</code> that allows for the textarea's
                                height and width to be adjusted.
                            </li>
                            <li>
                                <code className="property">height</code> = a CSS-supported property that specifies
                                the default height of the textarea.
                            </li>
                            <li>
                                <code className="property">maxHeight</code> = a CSS-supported property that specifies
                                the maximum height of the textarea.
                            </li>
                            <li>
                                <code className="property">width</code> = a CSS-supported property that specifies
                                the default width of the textarea.
                            </li>
                            <li>
                                <code className="property">minWidth</code> = a CSS-supported property that specifies
                                the minimum width of the textarea.
                            </li>
                        </ul>
                    </span>,
                    example: `formFields = { 
    notes: {
        label: "Notes", 
        type: "textarea", 
        resizable: true,
        height: "500px",
        width: "500px"
    } 
}`
                },
                {
                    name: "number",
                    description: <span>restricts input to whole numbers only.</span>,
                    notes: <span>
                        There are additional properties available for added features:
                            <ul>
                                <li><code className="property">min</code> = the minimum integer value
                                    allowed for form input. Defaults to <code
                                        className="property">0</code>.
                                </li>
                                <li><code className="property">max</code> = the maximum integer value
                                    allowed for form input.
                                </li>
                                <li><code className="property">maxLength</code> = the maximum number
                                    of whole number <b><i>digits</i></b> the form will allow.
                                </li>
                            </ul>
                    </span>,
                    example: `formFields = { 
    quantity: {
        label: "Qty", 
        type: "number", 
        min: 0,
        max: "100",
        maxLength: 3
    } 
}`
                },
                {
                    name: "double",
                    description: <span>restricts input double values.
                        Similar to <code className="property">number</code> but allows for decimal values.</span>,
                    notes: <span>
                        <ul>
                            <li>
                                It will append decimal if it is missing from the user's input (i.e. user inputs
                                <code className="property">100</code>, it will get transformed to
                                <code className="property">100.00</code>)
                            </li>

                            <li>
                                There are additional properties available for added features:
                                <ul>
                                    <li><code className="property">min</code> = the minimum integer value
                                        allowed for form input. Defaults to <code
                                            className="property">0</code>.
                                    </li>

                                    <li><code className="property">max</code> = the maximum integer value
                                        allowed for form input.
                                    </li>

                                    <li><code className="property">maxLength</code> = the maximum number
                                        of whole number <b><i>digits</i></b>, and decimal <b><i>digits</i></b>
                                        the user is allowed for input. For example, if
                                        <code className="property">maxLength = {4.2}</code> then users
                                        can only type up to 4 whole number digits, and up to 2 decimal
                                        digits (i.e. <code className="property">1000.99</code>).
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </span>,
                    example: `formFields = { 
    price: {
        label: "Price", 
        type: "double", 
        min: 0,
        max: "10000",
        maxLength: 5.2
    } 
}`
                },
                {
                    name: "date",
                    description: <span>
                        shows a datepicker, and saves the selection in <code className="property">MM/DD/YYYY</code>
                        format.
                    </span>,
                    notes: <span>
                        There are additional properties available for added features:
                        <ul>
                            <li><code className="property">minDate</code> = the minimum date that
                                the form will allow the user to select from the datepicker popup.
                            </li>
                            <li><code className="property">maxDate</code> = the minimum date that
                                the form will allow the user to select from the datepicker popup.
                            </li>
                        </ul>
                    </span>,
                    example: `formFields = { 
    dueDate: {
        label: "Due Date", 
        type: "date", 
        minDate: new Date(),
        maxDate: Moment().add('30', 'days') //Note: Uses Moment.js library
    } 
}`
                },
                {
                    name: "boolean",
                    description: "shows a dropdown field with two options: \"Yes\" or \"No\", whose values are boolean \"true\" and \"false\", respectively.",
                    notes: <span>There are additional properties available for added features:
                        <ul>
                            <li><code className="property">trueFalseValues</code> = a JSON object that
                                specifies what to show as option labels instead of the default <code
                                    className="property">Yes</code> and <code
                                    className="property">No</code>.
                                <ul>
                                    <li>
                                        For example: <code className="property">
                                        trueFalseValues = {"{true : 'Yay', false: 'Nay'}"}</code>
                                    </li>
                                </ul>
                            </li>
                            <li><code className="property">minContainerWidth</code> = the minimum width
                                of the select box. Defaults to <code className="property">unset</code>.
                                Note: this is different from the dropdown menu width,
                                use <code className="property">menuWidth</code> instead.
                            </li>
                            <li><code className="property">maxContainerWidth</code> = the maximum width
                                of the select box. Defaults to <code className="property">100% !important</code>.
                                Note: this is different from the dropdown menu width,
                                use <code className="property">menuWidth</code> instead.
                            </li>
                            <li><code className="property">menuWidth</code> = the width that the dropdown options popup will
                                expandto. Ideally, this property should be set wide enough where the
                                options are readable in one line. By default, the width expands
                                to the same width as the select field.
                            </li>
                            <li><code className="property">isClearable</code> = a boolean <code
                                className="property">true</code> or <code className="property">false</code> that allows for the "x" symbol to
                                appear on the select box allowing it to be clearable upon button
                                click; is false by default.
                            </li>
                        </ul>
                    </span>,
                    example: `formFields = { 
    isMandatory: {
        label: "Material Required?", 
        type: "boolean", 
        trueFalseValues: {
            true: "Required",
            false: "Not Required",
        },
        minContainerWidth: "250px",
        maxContainerWidth: "500px",
        menuWidth: "500px",
        isClearable: false
    } 
}`
                },
                {
                    name: <span>&#123;dropdown: &lt; <i>dropdown values</i> &gt;&#125;</span>,
                    description: "a field that displays a select field",
                    notes: <span>There are additional properties available for added features:
                        <ul>
                            <li><code className="property">&lt; <i>dropdown values</i> &gt;&#125;</code> can be one of the following</li>
                            <ul>
                                <li>an array of objects in the following format:
                                    <code
                                        className="property">&#123;label: <i>&lt;label</i>&gt;,
                                        value: <i>&lt;value</i>&gt;, color: <i>&lt;color</i>&gt;&#125;</code>
                                </li>
                                <li>a callback function that handles the asynchronous retrieval of
                                    dropdown options, and returns a <code
                                        className="property">&lt;Select/&gt;</code> object
                                </li>
                            </ul>

                            <li>There are additional properties available for added features:
                                <ul>
                                    <li><code className="property">minContainerWidth</code> = the minimum width
                                        of the select box. Defaults to <code className="property">unset</code>.
                                        Note: this is different from the dropdown menu width,
                                        use <code className="property">menuWidth</code> instead.
                                    </li>
                                    <li><code className="property">maxContainerWidth</code> = the maximum width
                                        of the select box. Defaults to <code className="property">100% !important</code>.
                                        Note: this is different from the dropdown menu width,
                                        use <code className="property">menuWidth</code> instead.
                                    </li>
                                    <li><code className="property">menuWidth</code> = the width that the dropdown options popup will
                                        expandto. Ideally, this property should be set wide enough where the
                                        options are readable in one line. By default, the width expands
                                        to the same width as the select field.
                                    </li>
                                    <li><code className="property">showSelectAll</code> = boolean that allows the option "All"
                                        to appear as the first menu option which selects all options.
                                    </li>
                                    <li><code className="property">multiSelect</code> = boolean that allows for multiple
                                        selection of values; is false by default if unspecified
                                    </li>
                                    <li><code className="property">isClearable</code> = boolean that allows for the "x" symbol to
                                        appear on the select box allowing it to be clearable upon button
                                        click; is false by default
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </span>,
                    example: `formFields = { 
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
    }
}`
                },
                {
                    name: <span>&#123; lookupValue: &#123;<i>specified properties</i> &#125;&#125;</span>,
                    description: "displays a text field with a green search button to its right that triggers a lookup" +
                        " popup to show. The popup contains a SearchFormComponent for looking up a value, and" +
                        " will pre-populate the FormComponent's field once a selection is made from the popup.",
                    notes: <span>
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
                                    <li><code className="property">additionalFieldsToPopulate</code> = a string array whose
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
                    </span>,
                    example: `formFields = { 
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
                    name: "sectionDivider",
                    title: "Data Types",
                    subtitle: <div>
                        FormFieldsComponent can have fields that simply formats & display data, preventing any user
                        interactions other than viewing.
                    </div>
                },
                {
                    name: "data",
                    description: "a field that display any type of data.",
                    notes: <span>There are additional properties available for added features:
                        <ul>
                            <li><code className="property">showValueAsTooltip</code> = specifies whether
                                the value will appear in a tooltip upon hover if in case the data is
                                too long to be rendered.
                            </li>
                            <li><code
                                className="property">width</code> = the width of the data field.</li>
                        </ul>
                    </span>,
                    example: `formFields = { 
    studentID: {
        label: "Student ID", 
        type: "data", 
    } 
}`
                },
                {
                    name: "dateData",
                    description: <span>a field that display date data set to <code
                        className="property">MM/DD/YYYY</code> format.</span>,
                    example: `formFields = { 
    registrationDate: {
        label: "Registration Date", 
        type: "dateData", 
    } 
}`
                },
                {
                    name: "multilineData",
                    description: "a field that allows for data that spans multiple lines/paragraphs to be viewed" +
                        "either in a popup, or a view-only textarea.",
                    notes: <span>
                        There are additional properties available for added features:
                        <ul>
                            <li>
                                If the data is to be displayed in a <u>popup</u>:
                                <ul>
                                    <li>
                                        <code className="property">showInPopup</code> = a boolean <code
                                        className="property">true</code> or <code
                                        className="property">false</code> where, if set to
                                        <code className="property">true</code>, displays the data in a separate
                                        popup to make viewability even easier. If this property is not used, the data
                                        will appear in a textarea field that's set to view only.
                                    </li>
                                </ul>
                            </li>

                            <li>If the data is to be displayed as a <u>view-only textarea</u>:
                                <ul>
                                    <li>
                                        <code className="property">resizable</code> = a boolean <code
                                        className="property">true</code> or <code
                                        className="property">false</code> that allows for the textarea's
                                        height and width to be adjusted.
                                    </li>
                                    <li>
                                        <code className="property">height</code> = a CSS-supported property that specifies
                                        the default height of the textarea.
                                    </li>
                                    <li>
                                        <code className="property">maxHeight</code> = a CSS-supported property that specifies
                                        the maximum height of the textarea.
                                    </li>
                                    <li>
                                        <code className="property">width</code> = a CSS-supported property that specifies
                                        the default width of the textarea.
                                    </li>
                                    <li>
                                        <code className="property">minWidth</code> = a CSS-supported property that specifies
                                        the minimum width of the textarea.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </span>,
                    example: `formFields = { 
    notes: {
        label: "Notes", 
        type: "multilineData", 
        resizable: true,
        height: "500px",
        width: "500px"
    },
    studentInfoSummary: {
        label: "Notes", 
        type: "multilineData", 
        showInPopup: true
    }
}`
                },
                {
                    name: "currencyData",
                    description: <span>converts a double value (not a string) to currency
                    format, along with dollar sign ($)</span>,
                    example: `formFields = { 
    cost: {
        label: "Cost", 
        type: "currencyData" 
    }
}`
                },
                {
                    name: "sectionDivider",
                    title: "Filler Type",
                    subtitle: <div>
                        FormFieldsComponent can be given some filler types to accommodate for aligning fields together.
                    </div>
                },
                {
                    name: "filler",
                    description: <span>adds an invisible form field to assist with aligning columns, and can work with
                        the <code className="property">columnCount</code> property to evenly-distribute the
                        fields.</span>,
                    example: `formFields = { 
    fillerOne: {
        type: "filler" 
    },
    fillerTwo: {
        type: "filler" 
    }
}`
                },
            ],
            includePropPostFix: false
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
            introduction: "FormFieldsComponent supports submitting upon clicking the 'Enter' key on any of the fields",
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
        hiddenFields: {
            introduction: "FormFieldsComponent supports storing data to hidden fields to be send upon submission.",
            properties: [
                {
                    name: "hiddenFields",
                    description: <span>specifies which fields will not be displayed to the user, but will exist as
                        part of <code className={"property"}>formFieldsData</code> object.</span>,
                    value: <span> a string array whose elements correspond to the keys of the
                        <code className="property">formFields</code> object.</span>,
                    example: `hiddenFields = { [ "id" ] }`
                },
            ]
        },
        disablingFields: {
            introduction: "All fields in the form can be disabled, or individual ones so user interactions can be prevented (at certain times).",
            properties: [
                {
                    name: "disabledFields",
                    description: "specifies which fields to disable from form input.",
                    value: <span> a string array whose elements correspond to the keys of the
                        <code className="property">formFields</code> object.</span>,
                    example: `disabledFields = { [ "firstName", "lastName" ] }`
                },
                {
                    name: "disabledAllFields",
                    description: "disables all fields from form input.",
                    value: <div>a boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    example: `disabledAllFields = { true }`
                }
            ]
        },
        columnCount: {
            introduction: "The form fields can consolidate all fields into one column, or up to 4 columns.",
            properties: [
                {
                    name: "columnCount",
                    description: <span>Specifies the number of columns to divide the form fields by. Additionally, you
                    can use the <code className="property">formField</code> type <code
                            className="property">filler</code>
                    to assist with aligning columns.</span>,
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