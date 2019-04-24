import React, {Component} from 'react';
import './GridComponent.css'

class GridComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 class="display-4" style={{textAlign: "left", paddingLeft: 10}}> Grid Component</h1>

                <h3 style={{textAlign: "left", paddingLeft: 50}}> Demonstration </h3>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <hr/>

                <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Usage </h3>

                <pre style={{
                    backgroundColor: "#1b1717",
                    color: "white",
                    marginLeft: 400,
                    marginRight: 400,
                    borderRadius: 20,
                    paddingLeft: 50,
                    textAlign: "left",
                    scrollable: "false"
                }}>
                    <code>
                        <br/>
                        <p> &lt;GridComponent </p>
                        <p>     //Required Ones </p>
                        <p>     columns=&#123;this.state.labels&#125;</p>
                        <p>     rows=&#123;this.state.data&#125;</p>
                        <br/>

                        <p>     //Optional Ones </p>
                        <p>     viewConfig="all"</p>
                        <p>     toggleSelect=&#123;false&#125;</p>
                        <p>     selectedValues=&#123;this.handleSelectedValues&#125;</p>
                        <p>     pageConfig=&#123;[ [25], [25, 50, 100] ]&#125;</p>
                        <p>     colReorder=&#123;true&#125;</p>
                        <p>     blockedColumns=&#123;this.state.blockedColumns&#125;</p>
                        <p>     blockedSearchColumns=&#123;this.state.blockedSearchColumns&#125;</p>
                        <p>     remotePaging=&#123;false&#125;</p>
                        <p>     totalCount=&#123;this.state.totalDataCount&#125;</p>
                        <p>     currentPage=&#123;this.handlePageChange&#125;</p>
                        <p>     currentPageSize=&#123;this.handlePageSizeChange&#125;</p>
                        <p>     searchValue=&#123;this.handleSearchValues&#125;</p>
                        <p>     deletedValues=&#123;this.handleDeletedValues&#125;</p>
                        <p>     editedValues=&#123;this.handleEditedValues&#125;</p>
                        <p>     refreshToggled=&#123;this.handleRefresh&#125;</p>
                        <p>     createToggled=&#123;this.handleCreate&#125; </p>
                        /&gt;
                    </code>
                </pre>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <hr/>

                <h3 style={{textAlign: "left", paddingLeft: 50}}> APIs </h3>

                <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>
                <dl class="row">
                    <dt className="col-sm-3"> Name</dt>
                    <dd className="col-sm-9"><i>columns</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">the list of columns for the given grid.</dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9"> an array of strings</dd>

                    <dt className="col-sm-3"> Example</dt>
                    <dd className="col-sm-9"></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>rows</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">the list of rows (data) for the given grid.
                        Note: for proper sorting behavior, ensure to pass numbers as column values for number-typed
                        columns.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9"> json array whose keys corresponds to the columns prop.</dd>

                    <dt className="col-sm-3"> Example</dt>
                    <dd className="col-sm-9"></dd>
                </dl>

                {/*====================== Additional Section ======================*/}

                <hr width={"90%"}/>
                <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional customizations </h5>

                {/*-----Next Entry-----*/}

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>viewConfig</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9"> toggles a particular grid setup such as showing the grid only, grid +
                        refresh button, grid + refresh + search, or all.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9"> a string of either
                        <ul style={{textAlign: "left", listStyleType: "none"}}>
                            <li>i. “bare” = renders only the grid with pagination & “# of entries at a time” options
                                available.
                            </li>
                            <li>ii. “simple” = similar to bare, but includes a refresh button</li>
                            <li>iii. “search” = similar to simple, but includes search by column components</li>
                            <li>iv. “all” = similar to search but includes the create/edit/delete components</li>
                            <li>v. “allnosearch” = similar to all but excludes the search by column components</li>
                        </ul>
                    </dd>

                    <dt className="col-sm-3"> Default</dt>
                    <dd className="col-sm-9"> "simple"</dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>toggleSelect</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">toggles whether to show the select buttons on the left side of the rows for
                        external manipulation. If set to true, then selectValues prop needs to exist & have a callback
                        function set to it, otherwise the select buttons will NOT render. It will also not render if
                        “viewConfig” is set to “all” or “allnosearch”.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">boolean</dd>

                    <dt className="col-sm-3"> Default</dt>
                    <dd className="col-sm-9">false</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                    <dd className="col-sm-9"><i>selectedValues</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>selectedValues</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">a function called by GridComponent to pass the values that the
                        users have selected to the parent component; this will return an array of json object(s) that
                        corresponds to the ones provided in the rows prop.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                    <dd className="col-sm-9"><i>toggleSelect</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>pageConfig</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">setting the default number of entries to view per page, as well as what
                        options will be provided to the user.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">an array composed of two elements:


                        <ul style={{textAlign: "left", listStyleType: "none"}}>
                            <li>i. The default page size set</li>
                            <li>ii. An array of page size options</li>
                        </ul></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>colReorder</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">toggles whether the user is allowed to reorder the columns.</dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">boolean</dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>blockedColumns</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">a list of columns that will be blocked from editing.</dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">an array corresponding to elements in the “columns” prop</dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>blockedSearchColumns</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">a list of columns that will be blocked for searching.</dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">an array corresponding to elements in the “columns” prop</dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>remotePaging</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">toggles whether remote paging is implemented to this grid or not.</dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">boolean</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needs to Have</dt>
                    <dd className="col-sm-9"><i>totalCount, currentPage, currentPageSize</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>totalCount</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">lets the GridComponent know how many data it will page through.</dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">number</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                    <dd className="col-sm-9"><i>remotePaging</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>currentPage</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">lets GridComponent know which page to toggle as selected.</dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                    <dd className="col-sm-9"><i>remotePaging</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>currentPageSize</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">required when remotePaging is toggled to true; this lets GridComponent know
                        which pageSize to toggle as selected.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                    <dd className="col-sm-9"><i>remotePaging</i></dd>
                </dl>


                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>searchValue</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">a function called by GridComponent to pass the column selected for
                        search, as well as the search value.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">a callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                    <dd className="col-sm-9"><i>viewConfig = "all"</i></dd>
                </dl>


                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>deletedValues</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9"> retrieves the rows that the user opted to delete. The callback function
                        will be called with a parameter containing an array of json objects corresponding to the rows
                        provided in “rows” prop.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">a callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                    <dd className="col-sm-9"><i>viewConfig = "all", "allnosearch"</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>editedValues</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9"> retrieves the row that has been edited. The callback function will be
                        called with a parameter containing an array of json objects where the first element is a row
                        corresponding to one of the rows in the “row” prop, and the second element being the changes
                        made to that row.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">a callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                    <dd className="col-sm-9"><i>viewConfig = "all", "allnosearch"</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>refreshToggled</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">responds to the user's desire to refresh the data in the grid. Note that
                        the ideal response to this is to change the values provided in the “columns” and “rows” prop of
                        GridComponent to reflect the latest data
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">a callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                    <dd className="col-sm-9"><i>viewConfig = "simple", "search", "all", "allnosearch"</i></dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className="row">
                    <dt className="col-sm-3">Name</dt>
                    <dd className="col-sm-9"><i>createToggled</i></dd>

                    <dt className="col-sm-3"> Description</dt>
                    <dd className="col-sm-9">responds to the user's desire to add new entry.
                        Note: that this won't provide any create form.
                    </dd>

                    <dt className="col-sm-3"> Value</dt>
                    <dd className="col-sm-9">a callback function</dd>

                    <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                    <dd className="col-sm-9"><i>viewConfig = "all", "allnosearch"</i></dd>
                </dl>

            </div>
        );
    }
}

export default GridComponent;