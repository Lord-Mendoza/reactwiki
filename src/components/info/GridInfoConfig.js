import React from "react";
import filteringImg from "../../images/Filtering-Grid-Design.png";
import groupingImg from "../../images/Grouping-Example.gif";

export const gridInfoConfig = {
    title: "Grid Component",
    defaultMenuItemSelected: "required",
    menuItems: [
        {key: "required", label: "Required"},
        {
            key: "columnFormatting", label: "Column Formatting",
            subMenuItems: [
                {key: "columnWidths", label: "Column Widths"},
                {key: "columnReorder", label: "Column Reordering"},
                {key: "hiddenColumns", label: "Hiding Columns"}
            ]
        },
        {
            key: "dataFormatting", label: "Data Formatting",
            subMenuItems: [
                {key: "treeData", label: "Tree Data"}
            ]
        },
        {
            key: "rowFormatting", label: "Row Formatting",
            subMenuItems: [
                {key: "rowDetails", label: "Row Details"}
            ]
        },
        {key: "tableCellFormatting", label: "Table Cell Formatting"},
        {key: "filtering", label: "Filtering"},
        {key: "grouping", label: "Grouping"},
        {key: "summarizing", label: "Summarizing"},
        {key: "selecting", label: "Selecting"},
        {
            key: "dataModifications", label: "Data Modifications",
            subMenuItems: [
                {key: "creating", label: "Creating"},
                {key: "editing", label: "Editing"},
                {key: "deleting", label: "Deleting"}
            ]
        },
        {key: "paging", label: "Paging"},
        {key: "sorting", label: "Sorting"},
        {
            key: "additionalFeatures", label: "Additional Features",
            subMenuItems: [
                {key: "refreshing", label: "Refreshing"},
                {key: "exporting", label: "Exporting"},
                {key: "totalCount", label: "Total Count"},
            ]
        },
        {
            key: "styling", label: "Styling",
            subMenuItems: [
                {key: "className", label: "CSS Class Name"},
                {key: "height", label: "Max Height"},
                {key: "width", label: "Max Width"},
                {key: "buttonLabels", label: "Refresh/Export Button Labels"}
            ]
        },
    ],
    contentItems: {
        required: {
            introduction: <div>The GridComponent requires two properties to render properly: &nbsp;
                <code className={"property"}>columns</code> and
                <code className={"property"}>rows</code>.
            </div>,
            properties: [
                {
                    name: "columns",
                    description: "the list of columns for the given grid",
                    value: <span>an array of JSON objects with the following properties:
                    <ul>
                        <li><code className="property">name</code> - the key/id of the column</li>
                        <li><code className="property">title</code> - the title of the column to be displayed in the header</li>
                    </ul>

                    Optionally, a type can be specified for a column using the following property.
                    <ul>
                        <li><code className="property">type</code> - the type of the column; used for formatting how the data is displayed</li>
                    </ul>

                    The available types are:
                        <ul>
                            <li>
                                <code className="property">currency</code> - adds a $ to the left of the data; right-aligns the data.
                            </li>

                            <li>
                                <code className="property">number</code> - right-aligns the data.
                            </li>

                            <li>
                                <code className="property">date</code> - reformats the data to the default "MM/DD/YYYY" format. Can specify an alternative format using the "format" property.
                            </li>
                        </ul>
                </span>,
                    example: `columns = { [
    {name: "name", title: "Name"}, 
    {name: "age", title: "Age", type: "number"},
    {name: "insDate", title: "Insert Date", type: "date"},
    {name: "updDate", title: "Update Date", type: "date", format: "MM/DD/YYYY hh:mm:ss a"},
    {name: "balance", title: "Balance", type: "currency"}
] }`,
                    notes: "Specifying the type of a column does not alter its respective row data. It's only used to determine how the data will be presented to the user."
                },
                {
                    name: "rows",
                    description: "the list of rows (data) for the grid",
                    value: "an array of JSON objects whose keys corresponds to the 'name' in the columns prop.",
                    example: `rows = { [
        {name: "Sarah", age: 24, insDate: "2007-10-23 09:11:04.000", updDate: "2009-12-02 00:32:03.000", balance: 234.43},
        {name: "John", age: 32, insDate: "2010-10-23 10:34:02.000", updDate: "2009-12-02 00:12:03.000", balance: 647.70},
        {name: "Sam", age: 26, insDate: "2009-09-12 19:23:04.000", updDate: "2009-12-02 12:53:03.000", balance: 0.00}
] }`,
                    notes: "For proper sorting behavior, ensure to pass numbers as column values for number-typed columns."
                }
            ]
        },
        columnWidths: {
            introduction: "The default widths of each column can be customized so that more data could be visible for a specific column, or to consolidate the extra spaces in the data.",
            properties: [
                {
                    name: "columnWidths",
                    description: "the specified column widths for each column. If not specified, the default will be applied.",
                    value: <div>a JSON object whose keys corresponds to the
                        <code className="property">columns</code> >
                        <code className="property">name</code> property.</div>,
                    defaultValue: 180,
                    example: `columnWidths = { {
    name: 200,
    age: 90,
    balance: 100
    //Any unspecified columns will have 180 pre-populated
} }`
                }
            ]
        },
        columnReorder: {
            introduction: "Users can be allowed to reorder columns if desired.",
            properties: [
                {
                    name: "allowColumnReorder",
                    description: "toggles whether the user is allowed to reorder the columns.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    example: `allowColumnReorder = { true }`
                }
            ]
        },
        hiddenColumns: {
            introduction: <div>
                Certain columns can be hidden from view to prevent interactions against them, or from showing their values.
            </div>,
            properties: [
                {
                    name: "hiddenColumns",
                    description: "a list of hidden columns on the grid",
                    value: <div>an array whose values correspond to the
                        <code className="property">columns</code>
                        "name" property </div>,
                    example: `hiddenColumns = { [
 "orderId", "itemId" 
] }`
                }
            ]
        },
        treeData: {
            introduction: "The rows data can be rendered in a tree-like fashion.",
            properties: [
                {
                    name: "isTreeData",
                    description: <div>toggles whether the
                        <code className={"property"}>rows</code>
                        property contains a 'children' property that is to be displayed as a tree.</div>,
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    example: `isTreeData = {true}
columns={ [
    {name: "orderNo", title: "Order No.", type: "number"},
    {name: "orderDate", title: "Order Date", type: "date"},
    {name: "customerName", title: "Customer Name"},
    {name: "itemId", title: "Item ID", type: "number"},
    {name: "lineItem", title: "Line Item", type: "number"},
    {name: "itemName", title: "Item Name"},
    {name: "weight", title: "Weight"},
    {name: "uom", title: "Unit of Measure"},
    {name: "unitPrice", title: "Unit Price", type: "currency"}
] }
rows={ [
   {
       "orderNo" : "3641223-1203322",
       "orderDate" : "2021-05-30 09:11:04.000",
       "customerName": "Charles Smith",
       "children": [
           {
               "itemId" : 105356,
               "lineItem" : 1,
               "itemName" : "Apples",
               "weight": 1.00,
               "uom": "oz",
               "unitPrice": .60
           },
           {
               "itemId": 105356,
               "lineItem": 2,
               "itemName" : "Oranges",
               "weight": 1.00,
               "uom": "oz",
               "unitPrice": .60
           }
       ]
   }, {
       "orderNo" : "3641223-1207712",
       "orderDate" : "2021-07-10 09:11:04.000",
       "customerName": "Jess Nguyen",
       "children": [
           {
               "itemId" : 118223,
               "lineItem" : 1,
               "itemName" : "Speakers",
               "weight": 2.00,
               "uom": "lbs",
               "unitPrice": 79.99
           },
           {
               "itemId": 176212,
               "lineItem": 2,
               "itemName" : "Screen Cleaner",
               "weight": 1.00,
               "uom": "lb",
               "unitPrice": 9.99
           }
       ]
   }
] }`
                }
            ]
        },
        rowDetails: {
            introduction: "Rows can be allowed to expand to view additional details based on information for a specific row.",
            properties: [
                {
                    name: "allowRowDetail",
                    description: "toggles whether the rows can be expanded to view additional details.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["rowDetailContent"],
                    example: `allowRowDetail = { true }`
                },
                {
                    name: "rowDetailContent",
                    description: "the content to display when a row gets expanded.",
                    value: <div>a callback function. When a row is expanded, it passed in an object as a parameter
                        with property <code className="property">row</code>.
                        The object is formatted where the keys correspond to the<code className="property">columns</code>
                        prop.</div>,
                    requires: ["allowRowDetail"],
                    example: `allowRowDetail={true}
rowDetailContent={
   ({row}) => {
       const {orderNo, orderDate, customerName, itemId, lineItem, itemName} = row;

       return <div>
           The customer {customerName} purchased {itemName} under the order
           number {orderNo} on {orderDate}.
       </div>
   }
}`},
            ]
        },
        tableCellFormatting: {
            introduction: "Table cells can be customized to have onClick callbacks, or reformat its appearance " +
                "to include specific stylings, etc.",
            properties: [
                {
                    name: "tableCellConfig",
                    description: "the specified styling/behavior for cells for a specific column of the table.",
                    value: <div>a JSON object whose keys correspond to the
                        <code className="property">columns</code>
                        "name" property, and values are JSON objects with properties:
                        <ul>
                            <li>
                                <code className="property">onClick</code> - a callback function that takes parameters
                                <code className="property">(row, column)</code>
                                and handles when the table cell gets clicked.
                            </li>
                            <li>
                                <code className="property">style</code> - the additional styling to apply to a table
                                cell. Can be used to customize the text of a cell, or its borders.
                            </li>
                            <li>
                                <code className="property">renderedComponent</code> - a callback function that
                                takes parameters
                                <code className="property">(row, column)</code>
                                and returns some HTML/React element. Can be used to display something other than the
                                text value of the table cell (ex. dropdown).
                            </li>
                        </ul>
                    </div>,
                    example: `tableCellConfig = {
    itemName: {
        onClick: (row, column) => {
            this.downloadInventoryReport(row)           
        },
        style: {
            color: 'blue',
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
    
    itemNameDropdown: {
        renderedComponent: (row, column) => { 
            <Popup trigger={<Icon name={"caret square down"}/>}>
                <Dropdown.Item onClick={() => this.openDetailsPopup(row)}>View Details</Dropdown.Item>
                <Dropdown.Item onClick={() => this.downloadInventoryReport(row)}>Download Inventory Report</Dropdown.Item>
                <Dropdown.Item onClick={() => this.openEditPricePopup(row)}>Update Price</Dropdown.Item>
            </Popup>
        }
    }
}`}
            ]
        },
        filtering: {
            introduction: <div>Users can easily filter through all the
                <code className={"property"}>rows</code>
                array through a input field that is rendered on the top-right of the grid.</div>,
            images: [{image: filteringImg, caption: "The grid appears with a 'Search' button on top-right."}],
            properties: [
                {
                    name: "allowFiltering",
                    description: "toggles whether to display the filter search field, and allow users to dynamically " +
                        "filter through the rows data.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    example: `allowFiltering = { true }`
                }
            ]
        },
        grouping: {
            introduction: "The GridComponent can group together similar values within specified column(s), and " +
                "format its appearance for ease of navigating the unique groups.",
            images: [{image: groupingImg, caption: "Data is grouped together into a collapsible group tree."}],
            properties: [
                {
                    name: "allowGrouping",
                    description: "toggles whether the rows in the grid should be grouped by a specified column.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["grouping"],
                    notes: <div>For grouping to work properly, the
                        <code className="property">rows</code>
                        property should include all of the data possible. This way, all the data can be grouped
                        properly, internally. Remote paging should therefore be disabled.</div>,
                    example: `allowGrouping = { true }`
                },
                {
                    name: "grouping",
                    description: "specifies the column(s) to group the rows by.",
                    value: <div>either an array of strings, or a single string. Each string value should correspond
                        to the
                        <code className="property">columns</code>
                        "name" property
                    </div>,
                    requires: ["allowGrouping"],
                    example: `allowGrouping = { true }
grouping = { "productType" }`},
                {
                    name: "expandGroupsByDefault",
                    description: "toggles whether to expand all groups by default.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["allowGrouping", "grouping"],
                    example: `expandGroupsByDefault = { true }`
                },
                {
                    name: "hideColumnNameInGrouping",
                    description: "toggles whether to hide the column name in the grouping header.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["allowGrouping", "grouping"],
                    example: `hideColumnNameInGrouping = { true }`
                },
                {
                    name: "showGroupCount",
                    description: "toggles whether to show the number of rows associated with a group in the grouping header.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["allowGrouping", "grouping"],
                    example: `showGroupCount = { true }`
                }
            ]
        },
        summarizing: {
            introduction: "Columns can provide a summary based on the values of the rows for that column. ",
            properties: [
                {
                    name: "allowSummarizing",
                    description: "toggles whether to show a summary section to specified column(s).",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    requires: ["summaryItems"],
                    defaultValue: `false`,
                    example: `allowSummarizing = { true }`
                },
                {
                    name: "summaryItems",
                    description: "the column(s) to provide a summary for, and what type of summary to provide.",
                    value: <div>an array of JSON objects with the following properties:
                        <ul>
                            <li>
                                <code className="property">columnName</code>- a string that corresponds to one of the
                                <code className="property">columns</code> "name" property.
                            </li>
                            <li>
                                <code className="property">type</code> - one of the following:
                                <code className="property">sum</code>,
                                <code className="property">max</code>,
                                <code className="property">min</code>,
                                <code className="property">avg</code>, or
                                <code className="property">count</code>
                            </li>
                        </ul>
                    </div>,
                    requires: ["allowSummarizing"],
                    notes: "If desired, the same column can provide more than one type of summary.",
                    example: `allowSummarizing = { true }
summaryItems = { [
    columnName: "lineItem", type: "count"
    columnName: "unitPrice", type: "avg",
    columnName: "unitPrice", type: "max",
    columnName: "unitPrice", type: "min",
    columnName: "profitMargin", type: "sum"
] }`},
                {
                    name: "summaryItemLabels",
                    description: <div>The labels that will replace the default labels for the summaries.
                        <br/>
                        For example, for a column that has a sum of "100", the summary will appear as
                        <code className="property">Sum: 100</code>.
                        If the user overrides the label to be "Total", then the summary will appear instead as
                        <code className="property">Total: 100</code>
                    </div>,
                    value: <div>a JSON object whose keys corresponds to one of the types (
                        <code className="property">sum</code>,
                        <code className="property">max</code>,
                        <code className="property">min</code>, etc.
                        ) and values are strings that will replace its labels.
                    </div>,
                    requires: ["allowSummarizing", "summaryItems"],
                    example: `summaryItemLabels = { {
    sum: "Total",
    max: "Max. Price",
    avg: "Average Price"       
} }`},
                {
                    name: "customSummaries",
                    description: "The custom summary value(s) to provide, replacing the internal calculated value(s).",
                    value: <div>an array of numeric-typed values that will override the summary values in the same
                        order as the
                        <code className="property">summaryItems</code>.
                    </div>,
                    example: `customSummaries = { [1259.00, 79.99, 50.00] }`}
            ]
        },
        selecting: {
            introduction: "Selections can be allowed to the users so they can choose which rows they want to perform an action to.",
            properties: [
                {
                    name: "allowSelections",
                    description: "toggles whether to show the select buttons on the left side of the rows for external manipulation.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["selections", "changeSelections"],
                    example: `allowSelections = { true }`
                },
                {
                    name: "selections",
                    description: "the list of rows that the user selected.",
                    value: <div>a variable that stores the
                        <code className="property">selections</code>
                        as provided by the
                        <code className="property">changeSelections</code> property.
                    </div>,
                    requires: ["allowSelections", "changeSelections"],
                    notes: <div>The variable should be initialized as an empty array
                        <code className="property">[]</code>.
                        In the example below, in the state object the
                        <code className="property">rowSelections</code> is initialized as
                        <code className="property">rowSelections = []</code>
                    </div>,
                    example: `selections = { rowSelections }`
                },
                {
                    name: "changeSelections",
                    description: <div>a function that handles changing the values stored in the variable placed in
                        <code className="property">selections</code>
                        prop.
                    </div>,
                    value: <div>a callback function that takes in a parameter
                        <code className="property">selections</code>
                        and replaces the value stored in the variable set in the
                        <code className="property">selections</code>
                        property
                    </div>,
                    requires: ["allowSelections", "selections"],
                    example: `changeSelections = {
    (selections) => {
        this.setState({rowSelections: selections});
    }                     
}`},
                {
                    name: "showSelectAll",
                    description: "toggles whether to show a select-all checkbox in the grid header, allowing for " +
                        "selecting all rows in a page.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["allowSelections", "selections", "changeSelections"],
                    example: `showSelectAll = { true }`
                },
                {
                    name: "selectByRowClick",
                    description: "toggles whether to allow users to click on a row to select them.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["allowSelections", "selections", "changeSelections"],
                    notes: "toggling this feature will prevent users from copying table cell values.",
                    example: `selectByRowClick = { true }`
                },
            ]
        },
        creating: {
            introduction: "Users can be allowed to create new data within the grid, allowing them to input " +
                "what they want to certain permitted columns. It can also be easier for them to input the data " +
                "with the ability to specify the types of each column.",
            properties: [
                {
                    name: "allowCreating",
                    description: "toggles whether to allow users to create new rows in the grid.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    notes: <div>By default, all columns will be allowed for input. If only certain columns are to be
                        allowed for creating, then the property <code className="property">editConfig</code> and its
                        <code className="property">fields</code> property needs to be provided to allow only those given
                        columns for creating, as well as the format the input field types will have.
                        </div>,
                    requires: ["onCommitChanges"]
                },
                {
                    name: "onCommitChanges",
                    description: "a function that passes in an object containing the added row(s).",
                    value: <div>a callback function that takes in a JSON object as a parameter, which contains
                        a property <code className="property">added</code>.
                        <br/>
                        <code className="property">added</code> is an array of JSON objects whose keys corresponds to the
                        <code className="property">columns</code> "name" property, and values are the inputted values by
                        the user for those columns.
                    </div>,
                    requires: ["allowCreating"],
                    notes: <div>The example below shows how to locally update the
                        <code className="property">rows</code> value to reflect it on to the table. Rather than changing
                        it locally, it can be replaced with a different callback function that handles it in its own way
                        (ex. making API call to update database, etc.).
                    </div>,
                    example: `onCommitChanges = {
    //Note how the "added" property is filtered from the object passed in the parameter
    ({added}) => {
        const {rows} = this.state;
        
        //Re-creating the rows array (to prevent pass-by reference)
        let newRows = Array.isArray(rows) ? rows.slice() : [];
        newRows.append(added);
        
        //Setting the new version of rows with the added rows
        this.setState({rows: newRows});
    }    
}`},
                {
                    name: "editConfig",
                    description: "a configuration specifying which columns are allowed for data-input, as well as their input types.",
                    value: <div>a JSON object with the following keys:
                        <ul>
                            <li>
                                <code className="property">fields</code> - a JSON object whose keys correspond to the
                                <code className="property">columns</code> "name" property, and values are JSON objects
                                with a single key <code className="property">type</code>.
                            </li>
                            <li>
                                <code className="property">fieldsHeight</code> - a CSS-supported height value that
                                specifies how tall the fields will be. Defaults to <code className="property">20px</code>.
                            </li>
                        </ul>

                        <br/>
                        For <code className="property">fields</code>, the available <code className="property">type</code> values are:
                        <ul>
                            <li><code className="property">text</code> - a regular text field.</li>
                            <li><code className="property">number</code> - a number-only field.</li>
                            <li><code className="property">currency</code> - a number-only field that allows for two decimal places.</li>
                            <li><code className="property">boolean</code> - a dropdown field that shows options "true" or "false".</li>
                            <li><code className="property">&#123;dropdown: &lt;<i>dropdown values</i>&gt;&#125;</code> - a field that shows a dropdown.</li>
                            <li><code className="property">date</code> - a date field that shows a date-picker.</li>
                        </ul>

                        <br/>
                        For the <code className="property">&#123;dropdown: &lt;<i>dropdown values</i>&gt;&#125;</code> type,
                        the <code className="property">&lt;<i>dropdown values</i>&gt;</code> can be one of the following:
                        <ul>
                            <li>
                                an array of objects in the following format (color can be omitted):
                                <br/>
                                <code className="property">
                                    &#123;label: &lt;label&gt;, value: &lt;value&gt;, color: &lt;color&gt;&#125;
                                </code>
                            </li>
                            <li>
                                a hook callback function that handles the asynchronous retrieval of dropdown options, and returns a
                                <code className="property">&lt;Select/&gt;</code>
                                object
                            </li>
                        </ul>
                    </div>,
                    requires: ["allowCreating", "onCommitChanges"],
                    example: `editConfig = { {
    fields: {
        itemName: {label: "Name", type: "text"},
        quantity: {label: "Qty", type: "number"},
        cost: {label: "Price", type: "currency"},
        availability: {label: "In Stock", type: "boolean"},
        uom: {
            label: "Unit Of Measure",
             type: {
                dropdown: [
                    {label: "pounds", value: "lbs"},
                    {label: "ounces", value: "oz"},
                    {label: "inches", value: "inch"},
                ]
            } 
        }},
        warehouseSource: {
            label: "Warehouse Source", type: {dropdown: this.getWarehouseOptions} 
        },
        expirationDate: {label: "Expiration Date", type: "date"}
    },
    fieldsHeight: "25px"
} }`}
            ]
        },
        editing: {
            introduction: "Users can be allowed to edit existing rows, letting them update permitted column values. It can " +
                "also be easier for them to input the data with the ability to specify the types of each column.",
            properties: [
                {
                    name: "allowEditing",
                    description: "toggles whether to allow users to edit existing rows in the grid.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    notes: <div>
                        <ul>
                            <li>
                                By default, all columns will be allowed for input. If only certain columns are to be
                                allowed for editing, then the property <code className="property">editConfig</code> and
                                its <code className="property">fields</code> property needs to be provided to allow only
                                the given columns for editing, as well as the format the input field types will have.
                            </li>

                            <li>
                                By default, GridComponent will assume that the
                                <code className="property">editConfig</code> >
                                <code className="property">editFormat</code> property will be
                                <code className="property">'row'</code>. If
                                table-cell editing is needed, change that property value to
                                <code className="property">'cell'</code>.
                            </li>
                        </ul>
                    </div>,
                    requires: ["onCommitChanges"]
                },
                {
                    name: "onCommitChanges",
                    description: "a function that passes in an object containing the changed row(s).",
                    value: <div>a callback function that takes in a JSON object as a parameter, which contains
                        a property <code className="property">changed</code>.
                        <br/>
                        <br/>
                        <code className="property">changed</code> is a JSON object in the following format:
                        <ul>
                            <li>
                                <code className="property">{
                                    `{<rows array index>: {<changed column>: <updated column value>, ...} }`
                                }</code>
                            </li>
                        </ul>
                    </div>,
                    requires: ["allowEditing"],
                    notes: <div>The example below shows how to locally update the
                        <code className="property">rows</code> value to reflect it on to the table. Rather than changing
                        it locally, it can be replaced with a different callback function that handles it in its own way
                        (ex. making API call to update database, etc.).
                    </div>,
                    example: `onCommitChanges = {
    //Note how the "changed" property is filtered from the object passed in the parameter
    ({changed}) => {
        const {rows} = this.state;
        
        //Re-creating the rows array (to prevent pass-by reference)
        let newRows = Array.isArray(rows) ? rows.slice() : [];
        
        //Changing the target objects of the rows array based on {changed} values
        if (changed && Object.keys(changed).length > 0) {
           Object.keys(changed).forEach(index => {
                newRows[index] = Object.assign({}, newRows[index], changed[index]);
           }) 
        }
        
        //Setting the new version of rows with the edited rows
        this.setState({rows: newRows});
    }    
}`},
                {
                    name: "editConfig",
                    description: "a configuration specifying which columns are allowed for data-input, as well as their input types.",
                    value: <div>a JSON object with the following keys:
                        <ul>
                            <li><code className="property">editFormat</code> - specifies the type of edit the grid will
                                render. The value is a string of either
                                <code className="property">'cell'</code> or
                                <code className="property">'row'</code>.

                                <ul>
                                    <li>
                                        If <code className="property">'row'</code> is selected, then an "Edit" button will
                                        appear on the left of the row. When the row is in edit mode, the user can choose to
                                        "Save" or "Cancel" their edits.
                                    </li>
                                    <li>
                                        If <code className="property">'cell'</code> is selected, then the edit mode
                                        will only trigger on a highlighted table cell. Once in edit mode, the table cell
                                        will have options to "Update" or "Cancel" the user's edits.
                                    </li>
                                </ul>

                                Defaults to
                                <code className="property">'row'</code>.
                            </li>
                            <li>
                                <code className="property">fields</code> - a JSON object whose keys correspond to the
                                <code className="property">columns</code> "name" property, and values are JSON objects
                                with a single key <code className="property">type</code>.
                            </li>
                            <li>
                                <code className="property">fieldsHeight</code> - a CSS-supported height value that
                                specifies how tall the fields will be. Defaults to <code className="property">20px</code>.
                            </li>
                        </ul>

                        For <code className="property">{`editFormat = {'cell'}`}</code> the following props are available:
                        <ul>
                            <li>
                                <code className="property">selectTextOnEditStart</code> - specifies whether to highlight
                                the value upon start of edit. Its value is a boolean
                                <code className="property">true</code> or
                                <code className="property">false</code>. Defaults to
                                <code className="property">false</code>.
                            </li>
                            <li>
                                <code className="property">startEditAction</code> - specifies the interaction needed
                                to trigger the table cell to switch to edit more. Its value is string of either
                                <code className="property">'click'</code> or
                                <code className="property">'doubleClick'</code>. Defaults to
                                <code className="property">'doubleClick'</code>.
                            </li>
                        </ul>

                        <br/>
                        For <code className="property">fields</code>, the available <code className="property">type</code> values are:
                        <ul>
                            <li><code className="property">text</code> - a regular text field.</li>
                            <li><code className="property">number</code> - a number-only field.</li>
                            <li><code className="property">currency</code> - a number-only field that allows for two decimal places.</li>
                            <li><code className="property">boolean</code> - a dropdown field that shows options "true" or "false".</li>
                            <li><code className="property">&#123;dropdown: &lt;<i>dropdown values</i>&gt;&#125;</code> - a field that shows a dropdown.</li>
                            <li><code className="property">date</code> - a date field that shows a date-picker.</li>
                        </ul>

                        <br/>
                        For the <code className="property">&#123;dropdown: &lt;<i>dropdown values</i>&gt;&#125;</code> type,
                        the <code className="property">&lt;<i>dropdown values</i>&gt;</code> can be one of the following:
                        <ul>
                            <li>
                                an array of objects in the following format (color can be omitted):
                                <br/>
                                <code className="property">
                                    &#123;label: &lt;label&gt;, value: &lt;value&gt;, color: &lt;color&gt;&#125;
                                </code>
                            </li>
                            <li>
                                a hook callback function that handles the asynchronous retrieval of dropdown options, and returns a
                                <code className="property">&lt;Select/&gt;</code>
                                object
                            </li>
                        </ul>
                    </div>,
                    requires: ["allowCreating", "onCommitChanges"],
                    example: `editConfig = { {
    editType: { 'cell' },
    selectTextOnEditStart: { true },
    startEditAction: { 'click' },
    fields: {
        itemName: {label: "Name", type: "text"},
        quantity: {label: "Qty", type: "number"},
        cost: {label: "Price", type: "currency"},
        availability: {label: "In Stock", type: "boolean"},
        uom: {
            label: "Unit Of Measure",
             type: {
                dropdown: [
                    {label: "pounds", value: "lbs"},
                    {label: "ounces", value: "oz"},
                    {label: "inches", value: "inch"},
                ]
            } 
        }},
        warehouseSource: {
            label: "Warehouse Source", type: {dropdown: this.getWarehouseOptions} 
        },
        expirationDate: {label: "Expiration Date", type: "date"}
    },
    fieldsHeight: "25px"    
} }`},
                {
                    name: "sectionDivider",
                    title: <div>
                        <code className="property">onCommitChanges</code>
                        When <code className="property">{`isTreeData = { true } `}</code>
                    </div>,
                    subtitle: <div>
                        Because of the nested nature of tree data, when it comes to editing, the
                        <code className="property">onCommitChanges</code> passes in different paramaters to assist
                        with the feature.
                    </div>
                },
                {
                    description: <div>
                        Rather than passing in a JSON object in the following format:
                        <ul>
                            <li>
                                <code className="property">{
                                    `{<rows array index>: {<changed column>: <updated column value>, ...} }`
                                }</code>
                            </li>
                        </ul>

                        When <code className="property">{`isTreeData = { true } `}</code> the object that GridComponent sends
                        is a JSON object in the following format:
                        <ul>
                            <li>
                                <code className="property">{
                                    `{ targetIndex: [parentIndex, childIndex], changed: {<changed column>: <updated column value>} }`
                                }</code>
                            </li>
                        </ul>

                        Note that it contains two properties: <code className="property">targetIndex</code> and
                        <code className="property">changeObject</code>. The difference is that it provides an exact
                        reference to the target row, given the parent and the child indices from the rows array.

                        <br/>
                        <br/>
                        Therefore, to access the target row from the <code className="property">rows</code>
                        array it is as simple as:
                        <br/>
                        <code className="property">rows[parent][child]</code>
                    </div>,
                    notes: <div>
                        The example below shows how to locally update the <code className="property">rows</code>
                        value to reflect it on to the table.
                        Rather than changing it locally, it can be replaced with a different callback function that
                        handles it in its own way (ex. making API call to update database, etc.).
                    </div>,
                    example: `onCommitChanges = {
    ({targetIndex, changed}) => {
        const parentIndex = targetIndex[0];
        const childIndex = targetIndex[1];
        
        //Re-creating the rows array (to prevent pass-by reference)
        let newRows = Array.isArray(rows) ? rows.slice() : [];
        
        //Changing the target object of the rows array based on {changed} values locally
        if (isNotAnEmptyObject(changed)) {
            newRows[parentIndex]["children"][childIndex] = Object.assign({}, newRows[parentIndex]["children"][childIndex], changed);
        }
        
        //Setting the new version of rows
        this.setState({rows: newRows});
    }                   
}`
                }
            ]
        },
        deleting: {
            introduction: "Users can be allowed to delete data within the grid through a 'Delete' button. " +
                "They can also be prompted to confirm their choice, if desired.",
            properties: [
                {
                    name: "allowDeleting",
                    description: "toggles whether to allow users to delete rows in the grid.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["onCommitChanges"],
                    example: `allowDeleting = { false }`
                },
                {
                    name: "onCommitChanges",
                    description: "a function that passes in an object containing the changed row(s).",
                    value: <div>a callback function that takes in a JSON object as a parameter, which contains
                        a property <code className="property">deleted</code>.
                        <br/>
                        <br/>
                        <code className="property">deleted</code> is an array of indexes with respect to the
                        <code className="property">rows</code> property that were selected for deletion.
                    </div>,
                    requires: ["allowDeleting", "editConfig"],
                    notes: <div>The example below shows how to locally update the
                        <code className="property">rows</code> value to reflect it on to the table. Rather than changing
                        it locally, it can be replaced with a different callback function that handles it in its own way
                        (ex. making API call to update database, etc.).
                    </div>,
                    example: `onCommitChanges = {
    //Note how the "deleted" property is filtered from the object passed in the parameter
    ({deleted}) => {
        const {rows} = this.state;
        
        //Re-creating the rows array (to prevent pass-by reference), and skipping deleted rows from being copied.
        let newRows = [];
        if (Array.isArray(rows) && rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                if (!deleted.includes(i))
                    newRows.push(rows[i]);
            }
        }
        
        //Setting the new version of rows with the deleted rows
        this.setState({rows: newRows});
    }    
}`},
                {
                    name: "showDeleteConfirmation",
                    description: "toggles whether to show a popup to confirm that the user wants to delete the row.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["allowDeleting", "onCommitChanges"],
                    example: `showDeleteConfirmation = { true }`
                },
                {
                    name: "deleteConfirmationMessage",
                    description: "the warning message that the user will see after attempting to delete a row.",
                    value: "a string",
                    defaultValue: "Are you sure you want to delete this data?",
                    requires: ["allowDeleting", "onCommitChanges", "showDeleteConfirmation"],
                    example: `showDeleteConfirmation = { true }
deleteConfirmationMessage = { "You are about to delete this item. Do you want to proceed?" }`
                },
            ]
        },
        paging: {
            introduction: "If enabled, the bottom panel of the grid can present functionality to adjust the page size," +
                " as well as to view the next/prev pages of data. The GridComponent can either perform the paging" +
                " feature locally, or remotely.",
            properties: [
                {
                    name: "sectionDivider",
                    title: "Local Paging",
                    subtitle: <div>Setting <code className="property">showPagingPanel</code> to
                        <code className="property">true</code> is all that is required to support local paging.</div>
                },
                {
                    name: "showPagingPanel",
                    description: "specifies whether the paging panel (page size, current/next/previous page) at the " +
                        "bottom of the grid is shown.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `true`,
                    notes: <div>Unless <code className="property">remotePaging</code> is set to true, the GridComponent
                        will perform paging internally using all of the data it is given in the
                        <code className="property">rows</code>. For this feature to work accurately, all of the possible
                        data should be provided to the <code className="property">rows</code> property.
                        </div>,
                    example: `showPagingPanel = { true }`
                },
                {
                    name: "sectionDivider",
                    title: "Remote Paging",
                    subtitle: <div>To configure the grid for remote paging,
                        <code className="property">showPagingPanel</code> and
                        <code className="property">allowRemotePaging</code> needs to be set to
                        <code className="property">true</code>, as well as filling-in the rest of the props as listed below.</div>
                },
                {
                    name: "allowRemotePaging",
                    description: "toggles the grid to support remote paging.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["showPagingPanel", "currentPage", "changeCurrentPage", "pageSize", "changePageSize", "totalCount"],
                    example: `allowRemotePaging = { true }`
                },
                {
                    name: "currentPage",
                    description: "the current page index (starting from 0) that the user is currently in.",
                    value: <div>a variable that holds the <code className="property">currentPage</code> as provided
                        by the <code className="property">changeCurrentPage</code> property.
                    </div>,
                    notes: <div>The variable should be initialized to <code className="property">0</code>. In the
                        example below, in the state object the <code className="property">gridCurrentPage</code> is
                        initialized as <code className="property">gridCurrentPage = 0</code>
                    </div>,
                    requires: ["showPagingPanel", "changeCurrentPage", "pageSize", "changePageSize", "totalCount"],
                    example: `currentPage = { gridCurrentPage }`
                },
                {
                    name: "changeCurrentPage",
                    description: <div>a function that handles changing the value stored in the variable placed in the
                        <code className="property">currentPage</code> prop.
                    </div>,
                    value: <div>a callback function that takes in a parameter
                        <code className="property">currentPage</code> and replaces the value stored in the variable set
                        in the <code className="property">currentPage</code> property.
                    </div>,
                    requires: ["showPagingPanel", "currentPage", "pageSize", "changePageSize", "totalCount"],
                    example: `changeCurrentPage = {
    (currentPage) => {
        this.setState({gridCurrentPage: currentPage});
    } 
}`},
                {
                    name: "pageSize",
                    description: "the current page size that the user has set.",
                    value: <div>a variable that holds the <code className="property">pageSize</code> as provided
                        by the <code className="property">changePageSize</code> property.
                    </div>,
                    notes: <div>The variable should be initialized to <code className="property">10</code> (if
                        <code className="property">pageSizes</code> is unspecified), or to the first value in the array
                        as specified in the <code className="property">pageSizes</code>.
                        In the example below, (assuming no <code className="property">pageSizes</code> is configured)
                        in the state object the <code className="property">gridPageSize</code> is
                        initialized as <code className="property">gridPageSize = 10</code>
                    </div>,
                    requires: ["showPagingPanel", "currentPage", "changeCurrentPage", "changePageSize", "totalCount"],
                    example: `pageSize = { gridPageSize }`
                },
                {
                    name: "changePageSize",
                    description: <div>a function that handles changing the value stored in the variable placed in the
                        <code className="property">pageSize</code> prop.
                    </div>,
                    value: <div>a callback function that takes in a parameter
                        <code className="property">pageSize</code> and replaces the value stored in the variable set
                        in the <code className="property">pageSize</code> property.
                    </div>,
                    requires: ["showPagingPanel", "currentPage", "changeCurrentPage", "pageSize", "totalCount"],
                    example: `changePageSize = {
    (pageSize) => {
        this.setState({gridPageSize: pageSize});
    } 
}`},
                {
                    name: "totalCount",
                    description: "the number of data in total that the grid will page through remotely. This is used" +
                        "internally to calculate how many pages total the grid would have to present as options to the" +
                        "user.",
                    value: "a numeric variable that holds the data size from remote that the grid will have to page " +
                        "through.",
                    requires: ["showPagingPanel", "currentPage", "changeCurrentPage", "pageSize", "changePageSize"],
                },
                {
                    name: "sectionDivider",
                    title: "Page Size Customization"
                },
                {
                    name: "pageSizes",
                    description: "configures the different page size options to present to the user.",
                    value: "an array of numeric values",
                    defaultValue: `[10, 50, 100]`,
                    example: `pageSizes = { [ 25, 50, 100, 500, 1000 ] }`
                },
            ]
        },
        sorting: {
            introduction: "If enabled, the grid header columns can be interacted with to sort the data with respect " +
                "to the asc/desc values of their toggled column. The GridComponent can either perform the sorting" +
                " feature locally, or remotely.",
            properties: [
                {
                    name: "sectionDivider",
                    title: "Local Sorting",
                    subtitle: <div>Setting <code className="property">allowSorting</code> to
                        <code className="property">true</code> is all that is required to support local sorting.</div>
                },
                {
                    name: "allowSorting",
                    description: "toggles whether to allow the users to sort column values in asc/desc order.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    notes: <div>Unless <code className="property">allowRemoteSorting</code> is set to true,
                        the GridComponent will perform sorting internally using all of the data it is given in the
                        <code className="property">rows</code>. For this feature to work accurately, all of the possible
                        data should be provided to the <code className="property">rows</code> property.
                    </div>,
                    example: `allowSorting = { true }`
                },
                {
                    name: "sectionDivider",
                    title: "Remote Sorting",
                    subtitle: <div>To configure the grid for remote sorting,
                        <code className="property">allowSorting</code> and
                        <code className="property">allowRemoteSorting</code> needs to be set to
                        <code className="property">true</code>, as well as filling-in the rest of the props as listed below.</div>
                },
                {
                    name: "allowRemoteSorting",
                    description: "toggles whether to allow users to sort columns remotely.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    requires: ["allowSorting", "sorting", "changeSorting"],
                    example: `allowRemoteSorting = { true }`
                },
                {
                    name: "sorting",
                    description: "the sorting that the user selected.",
                    value: <div>a variable that holds the <code className="property">sorting</code> as provided
                        by the <code className="property">changeSorting</code> property.
                    </div>,
                    notes: <div>The variable should be initialized to empty array <code className="property">[]</code>.
                        In the example below, in the state object the <code className="property">gridSorting</code> is
                        initialized as <code className="property">gridSorting = []</code>
                    </div>,
                    requires: ["allowSorting", "allowRemoteSorting", "changeSorting"],
                    example: `sorting = { gridSorting }`
                },
                {
                    name: "changeSorting",
                    description: <div>a function that handles changing the value stored in the variable placed in the
                        <code className="property">sorting</code> prop.
                    </div>,
                    value: <div>a callback function that takes in a parameter
                        <code className="property">sorting</code> and replaces the value stored in the variable set
                        in the <code className="property">sorting</code> property.
                    </div>,
                    requires: ["allowSorting", "allowRemoteSorting", "sorting"],
                    example: `changeSorting = {
    (sorting) => {
        this.setState({gridSorting: sorting});
    } 
}`},
                {
                    name: "sectionDivider",
                    title: "Sorting Algorithm Customization For Columns"
                },
                {
                    name: "columnsSorting",
                    description: "configures how a specified column should sort its values.",
                    value: <div>an array of JSON objects with the following properties:
                        <ul>
                            <li>
                                <code className="property">columnName</code> - the key/id of the column that corresponds
                                to one of the <code className="property">columns</code> "name" prop.
                            </li>
                            <li>
                                <code className="property">compare</code> - a callback function that
                                returns either
                                <code className="property">-1</code> (less than),
                                <code className="property">0</code> (equal), or
                                <code className="property">1</code> (greater than).
                            </li>
                        </ul>
                    </div>,
                    notes: <div>For date-typed columns, as long as the <code className="property">type</code> is
                        provided in the <code className="property">columns</code> property as "date", then the internal
                        sorting will be done accurately. It uses the compare function as seen in below's example.
                        See Required > columns prop from the menu on the left to learn how to do this.
                    </div>,
                    example: `columnsSorting = { {
    columnName: "Start Date",
    compare: (a, b) => {
            if ((a === null && b === null) || (a === undefined && b === undefined))
                return 1;
            else if (a === null || a === undefined)
                return -1;
            else if (b === null || b === undefined)
                return 1;
            else {
                const dateA = Date.parse(a);
                const dateB = Date.parse(b);
        
                if (dateA === dateB)
                    return 0;
                return (dateA < dateB) ? -1 : 1;
            }
    }
} }`}
            ]
        },
        refreshing: {
            introduction: "A refresh button can be presented to the user to allow them to refresh the data in the grid.",
            properties: [
                {
                    name: "allowRefreshing",
                    description: "toggles the refresh button to render on the bottom panel of the grid.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    required: ["refreshData"],
                    example: `allowRefreshing = { true }`
                },
                {
                    name: "refreshData",
                    description: <div>a function that handles the refreshing of the grid when the user clicks "Refresh"</div>,
                    value: <div>
                        a callback function that should re-retrieve and pass the latest values to the
                        <code className="property">rows</code> prop.
                    </div>,
                    required: ["allowRefreshing"],
                    example: `allowRefreshing = { true }
refreshData = {
    () => {
        //This is an example of how the data gets re-retrieved through an API call
        axios.get('/getProductList')
             .then(response => {
                const {data} = response;
                
                //Sets the latest database data to the rows variable, which then gets passed to the GridComponent. 
                if (data && Array.isArray(data))
                    this.setState({rows: data});
                else 
                    this.setState({rows: []});
             });    
    }
}`
                }
            ]
        },
        exporting: {
            introduction: "An export button can be presented to the user to allow them to export the data in the grid.",
            properties: [
                {
                    name: "allowExporting",
                    description: "toggles the export button to render on the bottom panel of the grid.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `false`,
                    required: ["exportData"],
                    example: `allowExporting = { true }`
                },
                {
                    name: "exportData",
                    description: "a function that handles exporting grid data when the user clicks 'Export'.",
                    value: "a callback function",
                    required: ["allowExporting"],
                    example: `allowExporting = { true }
exportData = {
    () => {
        //This is an example of how the export blob data gets retrieved through an API call
        axios.get('/exportProductList', {responseType: 'blob'})
             .then(response => {
                const {headers, data} = response;
                const fileName = response.headers['content-disposition']
                            .split(';')
                            .find(n => n.includes('filename='))
                            .replace('filename=', '')
                            .trim()
                            .replace(/\\"/g, "");
                
                this.setState({
                    showDownloadPrompt: true,
                    fileObject: {data, fileName}
                });
             });    
    }
}`
                }
            ]
        },
        totalCount: {
            introduction: "Users can be presented the total number of data at the bottom right of the grid, if desired.",
            properties: [
                {
                    name: "showTotalCount",
                    description: "toggles whether the 'Total: ' should be visible in the bottom panel of the grid.",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `true`,
                    example: `showTotalCount = { false }`
                }
            ]
        },
        className: {
            introduction: "The grid can be given a class name for CSS-related customizations.",
            properties: [
                {
                    name: "className",
                    description: <div>The CSS class name to attach to the <code className="property">div</code> of the
                        GridComponent</div>,
                    value: "a string",
                    example: `className = { "searchGrid" }`
                }
            ]
        },
        height: {
            introduction: "The grid can be given a maximum height to prevent the data from growing too tall, and " +
                "show scroll bars if it exceeds the specified value.",
            properties: [
                {
                    name: "maxGridHeight",
                    description: "the maximum height the grid can expand to vertically.",
                    value: "a string that is a CSS-support height value",
                    example: `maxGridHeight = { "50vh" }`
                }
            ]
        },
        width: {
            introduction: "The grid can be given a maximum width to prevent the data from growing too wide, and " +
                "show scroll bars if it exceeds the specified value.",
            properties: [
                {
                    name: "maxGridWidth",
                    description: "the maximum width the grid can expand to horizontally.",
                    value: "a string that is a CSS-support width value",
                    example: `maxGridWidth = { "50vw" }`
                }
            ]
        },
        buttonLabels: {
            introduction: "If either (or both) the 'Refresh' and 'Export' buttons are toggled on, their labels can be " +
                "hidden to simply the view of the grid by just presenting symbols.",
            properties: [
                {
                    name: "showButtonLabels",
                    description: "toggles whether to show the labels for the 'Refresh' and 'Export' buttons",
                    value: <div>boolean <code className="property">true</code> or <code
                        className="property">false</code></div>,
                    defaultValue: `true`,
                    example: `showButtonLabels = { true }`
                }
            ]
        }
    }
}