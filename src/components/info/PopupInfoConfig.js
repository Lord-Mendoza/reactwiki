import React from "react";
import allImg from "../../images/Popup-All.png";
import closeOnlyImg from "../../images/Popup-Close-Only.png";
import customImg from "../../images/Popup-Custom.png";
import customFormImg from "../../images/Popup-Custom-Form.png";
import submitImg from "../../images/Popup-Submit.png";

export const popupInfoConfig = {
    title: "Popup Component",
    defaultMenuItemSelected: "required",
    menuItems: [
        {key: "required", label: "Required"},
        {
            key: "customizations", label: "Customizations",
            subMenuItems: [
                {key: "footer", label: "Footer Content"},
                {key: "bodyPadding", label: "Body Padding"},
                {key: "closeButton", label: "Close Button"},
                {key: "className", label: "Class Name"},
            ]
        },
    ],
    contentItems: {
        required: {
            introduction: <div>The PopupComponent requires four properties to render properly: &nbsp;
                <code className={"property"}>header</code>,
                <code className={"property"}>content</code>,
                <code className={"property"}>show</code>, and
                <code className={"property"}>closeToggled</code>.
            </div>,
            properties: [
                {
                    name: "header",
                    description: "Specifies the title of the popup.",
                    value: "a string",
                    example: `header = { "Student Registration Form" }`
                },
                {
                    name: "content",
                    description: "Specifies the content of the popup. PopupComponent offers flexibility on the content, " +
                        "such as placing another component (ex. FormComponent) inside.",
                    value: "a string, or an HTML/React element.",
                    example: `content = {
    <FormFieldsComponent 
        formFields = { formFields } 
        formFieldsData = { formFieldsData }
        handlerFunction = { this.handleFormInput }
    /> 
}`
                },
                {
                    name: "show",
                    description: "Specifies whether to show the popup or not.",
                    value: <span>A boolean <code className="property">true</code> or
                        <code className="property">false</code> value.
                    </span>,
                    defaultValue: `false`,
                    example: `show = { true }`
                },
                {
                    name: "closeToggled",
                    description: "Specifies the callback function to call when the \"X\" icon of the popup is closed.",
                    value: "a callback function",
                    notes: <span>The callback function should simply set the variable assigned to <code
                        className="property">show</code> to be false.</span>,
                    example: `closeToggled = { this.closePopup }`
                },
            ]
        },
        footer: {
            introduction: "PopupComponent supports customizing the bottom of the popup to add a footer section for" +
                " grouping together buttons, or displaying additional custom content.",
            images: [
                {image: allImg, caption: <span>Appearance when <code className="property">footerConfig = "all"</code></span>},
                {image: closeOnlyImg, caption: <span>Appearance when <code className="property">footerConfig = "closeOnly"</code></span>},
                {image: customImg, caption: <span>Appearance when <code className="property">footerConfig = "custom"</code></span>},
                {image: customFormImg, caption: <span>Appearance when <code className="property">footerConfig = "custom"</code> and renders a FormFieldsComponent as content.</span>},
                {image: submitImg, caption: <span>Appearance when <code className="property">footerConfig = "submit"</code></span>}
            ],
            properties: [
                {
                    name: "footerConfig",
                    description: "Specifies the footer config type which defines which buttons to appear at the bottom " +
                        "of the popup.",
                    value: <span>A string of either one of the following:
                        <ul>
                            <li><code className="property">"custom"</code> = giving the developer the option to define their own content in the footer.</li>
                            <li><code className="property">"closeOnly"</code> = renders only a close button in the footer to close the popup.</li>
                            <li><code className="property">"submit"</code> = renders a close button as well as submit button in the footer.</li>
                            <li><code className="property">"all"</code> = renders a close, reset, & submit button in the footer. Ideal for forms.</li>
                        </ul>
                    </span>,
                    requires: ["customFooter (if set to \"custom\")", "resetToggled (if set to \"all\")", "resetToggled & submitToggled (if set to \"submit\")"],
                    example: `footerConfig = { "closeOnly" }`
                },
                {
                    name: "customFooter",
                    description: "Specifies the content to appear in the footer of the popup.",
                    value: "HTML/React elements.",
                    notes: <span>If a set of buttons are desired, it is highly recommended to wrap a set of
                        <a href="https://react-bootstrap.netlify.app/"> React-Bootstrap</a>
                        <code className="property">Button</code> elements with
                        <code className="property">Modal.Footer</code> as demonstrated with the example below.
                    </span>,
                    requires: ["footerConfig = { \"custom\" }"],
                    example: `footerConfig = {
    <Modal.Footer>
        <Button>Reset Form</Button>
        <Button>Submit Form</Button>
    </Modal.Footer> 
}`
                },
                {
                    name: "resetToggled",
                    description: <span>Specifies the reset callback function when the
                        <code className="property">Reset</code> button is selected for
                        <code className="property">footerConfig = "all"</code>.
                    </span>,
                    value: "a callback function.",
                    requires: ["footerConfig = { \"all\" }"],
                    example: `resetToggled = { this.resetForm }`
                },
                {
                    name: "submitToggled",
                    description: <span>Specifies the submit callback function when the
                        <code className="property">Submit</code> button is selected for
                        <code className="property">footerConfig = "all"</code> or
                        <code className="property">footerConfig = "submit"</code>.
                    </span>,
                    value: "a callback function.",
                    requires: ["footerConfig = { \"all\" } or footerConfig = { \"submit\" }"],
                    example: `submitToggled = { this.submitForm }`
                },
            ]
        },
        bodyPadding: {
            introduction: "PopupComponent supports adding a body padding to the popup's content.",
            properties: [
                {
                    name: "hasBodyPadding",
                    description: "Specifies to add default padding to the body of the popup or not.",
                    value: <span>boolean
                        <code className="property">true</code> or
                        <code className="property">false</code>
                    </span>,
                    defaultValue: `false`,
                    example: `hasBodyPadding = { true }`
                },
            ]
        },
        closeButton: {
            introduction: "If desired, PopupComponent can hide the 'X' close button on the top-right of the popup.",
            properties: [
                {
                    name: "showCloseButton",
                    description: "Specifies where to show close button on popup.",
                    value: <span>boolean
                        <code className="property">true</code> or
                        <code className="property">false</code>
                    </span>,
                    defaultValue: `true`,
                    example: `showCloseButton = { false }`
                },
            ]
        },
        className: {
            introduction: "You can associate a class name to the popup for additional CSS configurations.",
            properties: [
                {
                    name: "className",
                    description: "Specifies the class name of the popup.",
                    notes: "The class name can be used to manipulate the width of the popup.",
                    value: "a string",
                    example: `className = { "studentInfoPopup" }
    
//For specifying width, within the associated CSS file the following can be performed
.fade.studentInfoPopup.modal.show .modal-dialog.modal-dialog-centered {
    max-width: 500px; //Specify the width here
}
`
                },
            ]
        }
    }
}