import React from "react";
import fileUploadDefault from "../../images/File-Upload-Default.gif";
import fileUploadBtn from "../../images/File-Upload-Btn.gif";

export const fileUploadInfoConfig = {
    title: "File Upload Component",
    defaultMenuItemSelected: "required",
    menuItems: [
        {key: "required", label: "Required"},
        {
            key: "uploadManager", label: "Restricting Uploaded Files",
            subMenuItems: [
                {key: "fileTypes", label: "File Type"},
                {key: "uploadCount", label: "File Count"}
            ]
        },
        {key: "fileUploadManager", label: "File Upload Manager"},
        {
            key: "styling", label: "Styling",
            subMenuItems: [
                {key: "appearance", label: "Button/File Drop Field"},
                {key: "uploadText", label: "Upload Text Instruction"}
            ]
        }
    ],
    contentItems: {
        required: {
            introduction: <div>The FileUploadComponent requires only one property to render properly: &nbsp;
                <code className={"property"}>files</code>
            </div>,
            properties: [
                {
                    name: "files",
                    description: "The callback function used to return the list of files.",
                    value: "a callback function.",
                    example: `files = { this.setFiles }`
                }
            ]
        },
        fileTypes: {
            introduction: <div>The FileUploadComponent supports accepting only specified file types.</div>,
            properties: [
                {
                    name: "fileType",
                    description: "Specifies the file type(s) that the file uploader will accept.",
                    value:
                        <span>A JSON object with a common <a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME type</a> as keys,
                        and an array of file extensions as values.</span>,
                    defaultValue: "\"\"",
                    notes: <span>
                        <ul>
                            <li>The default value <code className="property">""</code> accepts any file type</li>
                            <li>For specifying values, when consulting the <a
                                href="https://developer.mozilla.org/en-US/docs1/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME Types </a>
                                table use the <code className="property">MIME Types</code> column as the key, and <code
                                    className="property">Extension</code> column
                                as the array of value
                            </li>
                        </ul>
                    </span>,
                    example: `fileType = {
    'application/vnd.ms-excel': [".xls"],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [".xlsx"]
}`
                }
            ]
        },
        uploadText: {
            introduction: <div>You can customize the text that appears inside the file upload field/button.</div>,
            properties: [
                {
                    name: "fileUploadText",
                    description: "Specifies the label of the upload field/button.",
                    value: "a string",
                    showDefaultValueAsCode: false,
                    defaultValue: <span>
                        <ul>
                            <li>If uploadByBtn is set to true, the default fileUploadText is <code
                                className="property">"Upload"</code></li>
                            <li>Otherwise, it's <code className="property">"Drag and drop some files here, or click to select files"</code></li>
                        </ul>
                    </span>,
                    example: `fileUploadText = { "Only .txt files are supported" }`
                }
            ]
        },
        uploadCount: {
            introduction: <div>The FileUploadComponent supports limiting the file upload count.</div>,
            properties: [
                {
                    name: "allowMultiUpload",
                    description: "Specifies whether to allow user to select multiple files for uploading, or just " +
                        "one file.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `true`,
                    example: `allowMultiUpload = { true }`
                }
            ]
        },
        fileUploadManager: {
            introduction: "Files uploaded can either be managed after uploading them (for adding more files, or " +
                "deleting already uploaded ones), or be sent straight to the callback function.",
            properties: [
                {
                    name: "showFileUploadManager",
                    description: " Specifies whether to show the \"files uploaded\" queue to the user, and allow them to reset, delete, and submit them",
                    defaultValue: `true`,
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    example: `showFileUploadManager = { true }`
                },
                {
                    name: "resetUponSubmit",
                    description: "Specifies whether to reset the list of files uploaded upon clicking \"submit\"",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `true`,
                    example: `resetUponSubmit = { false }`
                }
            ]
        },
        appearance: {
            introduction: <div>The FileUploadComponent can appear as a file-drop field, or an upload button.</div>,
            images: [
                {image: fileUploadDefault, caption: "Demonstrates the FileUploadComponent in its default appearance."},
                {image: fileUploadBtn, caption: "Demonstrates the FileUploadComponent in its button appearance."},
            ],
            properties: [
                {
                    name: "uploadByBtn",
                    description: "Specifies whether to show a button to trigger upload, or a file upload field.",
                    defaultValue: `false`,
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    example: `uploadByBtn = { true }`
                }
            ]
        }
    }
}