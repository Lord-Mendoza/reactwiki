import React from "react";

export const loaderInfoConfig = {
    title: "Loader Component",
    defaultMenuItemSelected: "required",
    menuItems: [
        {key: "required", label: "Required"},
        {
            key: "styling", label: "Styling",
            subMenuItems: [
                {key: "loadingMessage", label: "Loading Message"},
                {key: "inverted", label: "Inverted Appearance"},
            ]
        },
    ],
    contentItems: {
        required: {
            introduction: <div>The LoaderComponent requires two properties to render properly: &nbsp;
                <code className={"property"}>isLoading</code> and
                <code className={"property"}>content</code>
            </div>,
            properties: [
                {
                    name: "isLoading",
                    description: "Specifies if the loading mask needs to be displayed.",
                    value: <span>A boolean <code className="property">true</code> or
                        <code className="property">false</code> value.
                    </span>,
                    example: `isLoading = { true }`
                },
                {
                    name: "content",
                    description: "The content to be overlayed.",
                    value: <span>An HTML/React element</span>,
                    example: `content = { 
    <GridComponent 
        rows={{gridRows}}
        columns={{gridColumns}}
    />
}`
                }
            ]
        },
        loadingMessage: {
            introduction: "The default \"Loading\" message can be overriden to mention a more specific message.",
            properties: [
                {
                    name: "loadingMessage",
                    description: "Specifies what message to appear at the center of the overlay.",
                    value: "a string",
                    example: `loadingMessage = { "Retrieving Data" }`
                },
            ]
        },
        inverted: {
            introduction: "LoaderComponent supports having an inverted appearance.",
            properties: [
                {
                    name: "inverted",
                    description: "Specifies whether to invert the background color of the overlay from black to light gray.",
                    defaultValue: `true`,
                    value: <span>A boolean <code className="property">true</code> or
                        <code className="property">false</code> value.
                    </span>,
                    example: `inverted = { false }`
                },
            ]
        }
    }
}