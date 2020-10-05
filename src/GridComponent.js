import React, {Component} from 'react';
import './ComponentStyling.css'
import {Carousel} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class GridComponent extends Component {
    constructor(props) {
        super(props);

        this.runCodePrettify = this.runCodePrettify.bind(this);
    }

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
                <h1 class="display-4" style={{textAlign: "center"}}>Grid Component</h1>

                <section data-aos={"fade-right"} data-aos-delay={"300"}>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                    <ul className="nav flex-column" style={{textAlign: "left", paddingLeft: 50, lineHeight: "10px"}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#prereq">Pre-Requisites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#configs">Available Configurations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#implementation">Sample Implementation</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#api">APIs</a>
                        </li>
                        <ul className="nav flex-column" style={{textAlign: "left", paddingLeft: 50, lineHeight: "10px"}}>
                            <p style={{marginBottom: 5, marginTop: 5}}><b>Jump To: </b></p>
                            <li className="nav-item">
                                <a className="nav-link" href="#api">Required</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#interactions">Data Interactions</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#displaying">Displaying Data</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#paging">Paging</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#styling">Styling</a>
                            </li>
                        </ul>
                    </ul>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"prereq"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Pre-Requisites </h3>

                    <div style={{textAlign: "left", paddingLeft: 70}}>
                        <p> &#8226; You need to include the following on your package.json </p>
                        <div style={{paddingLeft: 80}}>
                            <samp>
                                <p>&#34;dependencies&#34;:    &#123;</p>
                                <p style={{marginLeft: "40px"}}>&#8220;@devexpress/dx-react-core&#8221;    &#58; &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;@devexpress/dx-react-grid&#8221;    &#58; &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;@devexpress/dx-react-grid-bootstrap4&#8221;    &#58; &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;bootstrap&#8221;: &#8220;latest&#8221;,</p>
                                <p style={{marginLeft: "40px"}}>&#8220;react-icons&#8221;: &#8220;latest&#8221;,</p>
                                <p>&#125;</p>
                            </samp>
                        </div>

                        <p> &#8226; Then on your index.js file include: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import 'bootstrap/dist/css/bootstrap.min.css'; </samp>
                        </div>

                        <br/>
                        <p> &#8226; Lastly, import the GridComponent for use: </p>
                        <div style={{paddingLeft: 80}}>
                            <samp> import GridComponent from "./GridComponent" </samp>
                        </div>
                    </div>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"configs"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Available Configurations </h3>

                    <Carousel pauseOnHover={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./bare.png"
                                alt="Render for bare"
                            />
                            <Carousel.Caption>
                                <h3><i>viewConfig</i> = "bare"</h3>
                                <p>Displays only the grid & paging options.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./simple.png"
                                alt="Render for simple"
                            />

                            <Carousel.Caption>
                                <h3><i>viewConfig</i> = "simple"</h3>
                                <p>Builds on top of "bare" but provides a refresh button.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./search.png"
                                alt="Render for search"
                            />

                            <Carousel.Caption>
                                <h3><i>viewConfig</i> = "search"</h3>
                                <p>Builds on top of "simple" but provides search-by-column functionality</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./all.png"
                                alt="Render for all"
                            />

                            <Carousel.Caption>
                                <h3><i>viewConfig</i> = "all"</h3>
                                <p>Builds on top of "search" but provides options to add, edit, and delete rows.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./allnosearch.png"
                                alt="Render for allnosearch"
                            />

                            <Carousel.Caption>
                                <h3><i>viewConfig</i> = "allnosearch"</h3>
                                <p>Presents the same features of "all", but excludes search-by-column functionality.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>

                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                    <pre class="prettyprint lang-html">
                    <code>
                        <br/>
                        <p> &lt;GridComponent </p>
                        <p>     &#47;&#47;Required Ones </p>
                        <p>     columns=&#123;this.state.labels&#125;</p>
                        <p>     rows=&#123;this.state.data&#125;</p>
                        <br/>

                        <p>     &#47;&#47;Optional Ones </p>
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
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"api"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>

                    <h3 style={{textAlign: "left", paddingLeft: 50}}> APIs </h3>

                    <h5 id={"basics"} style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>
                    <dl class="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9"><i>columns</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">the list of columns for the given grid.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> an array of JSON objects that contains the properties "name" for the name/id of the column, and "title" for the column's header title </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9"> columns=&#123; &nbsp; [&#123;name: "name", title: "Name"&#125;, &#123;name: "age", title: "Age"&#125;] &nbsp; &#125;</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>rows</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">the list of rows (data) for the given grid. <b><i> Object keys must match the column "name" (case-sensitive). </i></b>
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> an array of JSON objects whose keys corresponds to the columns prop. </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">rows=&#123; &nbsp; [ &#123;name: "Sarah", age: 24&#125;, &#123;name: "Sam", age: 32&#125; ] &nbsp; &#125;</dd>

                        <dt className="col-sm-3"> Notes</dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> For proper sorting behavior, ensure to pass numbers as column values for number-typed
                            columns.
                        </dd>
                    </dl>

                    {/*====================== Interacting With Data Section ======================*/}

                    <section id={"interactions"}/>

                    <hr width={"90%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Interacting With Data: </h5>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Disabling </h6>
                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>disableModifications</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether to disable making any changes to the grid, but allows for viewing only.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> boolean</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Creating </h6>
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

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Editing </h6>
                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>editExternally</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> specifies whether the developer wants to handle editing on their own, and not allow for in-line editing as provided.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">false</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>editToggled</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>editToggled</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> a function that passes two parameters (row object based on "Rows" prop, and it's index)
                            which allows the developer to handle it's data changes.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">callback function</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                        <dd className="col-sm-9"><i>editExternally</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>hideOnSubmit</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> specifies whether the edit button should hide everytime a user completes an edit.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">false</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Deleting </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>deletedValues</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> retrieves the rows that the user opted to delete. The callback
                            function
                            will be called with a parameter containing an array of JSON objects corresponding to the
                            rows
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
                        <dd className="col-sm-9"><i>clearDeletedRows</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether to clear the list of rows selected for deletion.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">false</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>revertClearDeletedRows</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>revertClearDeletedRows</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">reverts the toggle made by clearDeletedRows to restore normal state.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                        <dd className="col-sm-9"><i>clearDeletedRows</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Selecting </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>toggleSelect</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether to show the select buttons on the left side of the rows
                            for
                            external manipulation. If set to true, then selectValues prop needs to exist & have a
                            callback
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
                            users have selected to the parent component; this will return an array of JSON object(s)
                            that
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
                        <dd className="col-sm-9"><i>resetSelections</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether to reset selections made in the grid.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>selectionsWereReset</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">a function called once resetSelections took effect.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">callback function</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Refreshing </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>refreshToggled</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">responds to the user's desire to refresh the data in the grid. Note
                            that
                            the ideal response to this is to change the values provided in the “columns” and “rows” prop
                            of
                            GridComponent to reflect the latest data
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a callback function</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>viewConfig = "simple", "search", "all", "allnosearch"</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Searching </h6>

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
                        <dd className="col-sm-9"><i>resetSearch</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether to reset the search field.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>revertResetSearch</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>revertResetSearch</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">a function called once the search field has been successfully reset.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a callback function</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                        <dd className="col-sm-9"><i>resetSearch</i></dd>
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
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Filtering </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>filterByColumnEnabled</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a callback function</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                        <dd className="col-sm-9"><i>resetSearch</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>filterArray</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"></dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>filterByColumnEnabled == true </i></dd>
                    </dl>

                    {/*====================== Displaying Data Section ======================*/}

                    <section id={"displaying"}/>
                    <hr width={"90%"}/>

                    {/*====================== Paging Section ======================*/}

                    <section id={"paging"}/>
                    <hr width={"90%"}/>

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
                        <dd className="col-sm-9">required when remotePaging is toggled to true; this lets GridComponent
                            know
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
                        <dd className="col-sm-9"><i>editedValues</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> retrieves the row that has been edited. The callback function will be
                            called with a parameter containing an array of JSON objects where the first element is a row
                            corresponding to one of the rows in the “row” prop, and the second element being the changes
                            made to that row.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a callback function</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>viewConfig = "all", "allnosearch"</i></dd>
                    </dl>


                    {/*====================== Styling ======================*/}

                    <hr width={"90%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Grid Styling </h5>

                    {/*-----Next Entry-----*/}

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>columnWidths</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> the specified column widths for each column. If not specified, the default will be applied. <b><i> Object keys must match the column "name" (case-sensitive). </i></b>
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> JSON object whose keys corresponds to the columns "name" prop.
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">columnWidths=&#123;&nbsp;&#123;name: 100, age: 50&#125;&nbsp;&#125;</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> 180</dd>
                    </dl>

                    <hr width={"85%"}/>

                    {/*-----Next Entry-----*/}

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>tableCell</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> the specified styling/behavior for cells of the table; can be used for defining how cells should appear for certain columns, onClick callbacks when clicking a table data, etc.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> a function whose parameter is a JSON object contains &#123;row, column, ...restProps&#125;, and the function returns an instance of &#60;Table.Cell/&#62;
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9"> <b><i>below demonstrates a table cell for the "add" column to display an add icon, then performing callback function upon clicking</i></b>
                            <br/>&emsp;tableCell=&#123;
                                &emsp;(&#123;row, column, ...restProps&#125;) => &#123; <br/>
                                &emsp;&emsp;if (column.title === "Add") &#123;<br/>
                                &emsp;&emsp;&emsp;return &#60;Table.Cell
                                        <br/>&emsp;&emsp;&emsp;&emsp;row=&#123;row&#125;
                                        <br/>&emsp;&emsp;&emsp;&emsp;&#123;...restProps&#125;
                                        <br/>&emsp;&emsp;&emsp;&emsp;className=&#123;'icon'&#125;
                                    <br/>&emsp;&emsp;&emsp;&#62;
                                        <br/>&emsp;&emsp;&emsp;&emsp;&#60;div style=&#123;&#123;width: "1vw"&#125;&#125; onClick=&#123;() =&#62; this.showAdditionalInfoPopup(true, row, "add")&#125;&#62;
                                            <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&#60;Image src=&#123;create&#125; style=&#123;&#123;display: "inline"&#125;&#125;/&#62;
                                        <br/>&emsp;&emsp;&emsp;&emsp;&#60;/div&#62;
                                        <br/>&emsp;&emsp;&emsp;&#60;/Table.Cell&#62;
                                    <br/>&emsp;&emsp;&#125;&emsp;else &#123;
                                        <br/>&emsp;&emsp;&emsp;&emsp;return &#60;Table.Cell
                                        <br/>&emsp;&emsp;&emsp;&emsp;&emsp;row=&#123;row&#125;
                                        <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&#123;...restProps&#125;
                                    <br/>&emsp;&emsp;&emsp;&emsp;&#62;
                                        <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&#123;row[column.name]&#125;
                                        <br/>&emsp;&emsp;&emsp;&#60;/Table.Cell&#62;
                                    <br/>&emsp;&emsp;&#125;
                            <br/>&emsp;&#125;</dd>
                    </dl>

                    {/*-----Next Entry-----*/}

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>viewConfig</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> toggles a particular grid setup.
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
                        <dd className="col-sm-9"> "bare"</dd>
                    </dl>

                    <ScrollUpButton showAtPosition={300}/>
                </section>
            </div>
        );
    }
}

export default GridComponent;