import React from "react";
import maskComponentImg from "../../images/Mask-Component-Example.gif";

export const maskInfoConfig = {
    title: "Mask Component",
    defaultMenuItemSelected: "required",
    menuItems: [
        {key: "required", label: "Required"},
        {key: "style", label: "Style"}
    ],
    contentItems: {
        required: {
            introduction: <div>The MaskComponent requires three properties to render properly: &nbsp;
                <code className={"property"}>header</code>,
                <code className={"property"}>content</code>, and
                <code className={"property"}>show</code>
            </div>,
            images: [{image: maskComponentImg, caption: "Demonstrates the loader component overlaying a grid."}],
            properties: [
                {
                    name: "header",
                    description: "Specifies the title of the popup.",
                    value: "a string",
                    example: `header = { "Please Wait" }`
                },
                {
                    name: "content",
                    description: "Specifies the message to appear in the mask popup.",
                    value: "a string",
                    example: `content = { "Adding Student Info..." }`
                },
                {
                    name: "show",
                    description: "Specifies whether to show the loading mask popup or not.",
                    value: <span>A boolean <code className="property">true</code> or
                        <code className="property">false</code> value.
                    </span>,
                    example: `show = { true }`
                }
            ]
        },
        style: {
            introduction: <div>The MaskComponent can be customized further to show a media file (as a loading icon)
                along with the loading message, or text only.
            </div>,
            properties: [
                {
                    name: "loadingIcon",
                    description: "Specifies the media file that represents the loading icon.",
                    value: "HTML-supported source file",
                    example: `loadingIcon = { loadingImg }`
                },
                {
                    name: "textOnlyContent",
                    description: "Restricts the loading mask popup to display the loading message only, without" +
                        "any loading icons.",
                    value: <span>A boolean <code className="property">true</code> or
                        <code className="property">false</code> value.
                    </span>,
                    example: `textOnlyContent = { true }`
                }
            ]
        }
    }
}