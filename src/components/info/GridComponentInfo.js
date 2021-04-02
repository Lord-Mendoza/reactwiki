import React, {Component} from 'react';
import '../../styling/ComponentStyling.css'
import {Carousel} from "react-bootstrap";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class GridComponentInfo extends Component {
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

                    <div style={{textAlign: "left", paddingLeft: 30}}>
                        <ol>
                            <li><a className="nav-link glossary" href="#configs">Available Configurations</a></li>
                            <li><a className="nav-link glossary" href="#props">Props</a></li>

                            <ul>
                                <li><a className="nav-link glossary" href="#props">Required</a></li>
                                <li><a className="nav-link glossary" href="#interactions">Interacting With Data</a></li>
                                <li><a className="nav-link glossary" href="#displaying">Displaying Data</a></li>
                                <li><a className="nav-link glossary" href="#sorting">Sorting</a></li>
                                <li><a className="nav-link glossary" href="#paging">Paging</a></li>
                                <li><a className="nav-link glossary" href="#styling">Styling</a></li>
                            </ul>
                        </ol>
                    </div>
                </section>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <section id={"configs"} data-aos={"fade-right"} data-aos-delay={"300"}>
                    <hr/>
                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Available Configurations </h3>

                    <Carousel interval={null}>
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
                <hr/>
                <section id={"props"} data-aos={"fade-right"} data-aos-delay={"300"}>

                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Props </h3>

                    <h5 id={"basics"} style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>
                    <dl class="row">
                        <dt className="col-sm-3"> Name</dt>
                        <dd className="col-sm-9"><i>columns</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">the list of columns for the given grid.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> an array of JSON objects that contains the properties "name" for the
                            name/id of the column, and "title" for the column's header title
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9"> columns=&#123; &nbsp; [&#123;name: "name", title:
                            "Name"&#125;, &#123;name: "age", title: "Age"&#125;] &nbsp; &#125;</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>rows</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">the list of rows (data) for the given grid. <b><i> Object keys must
                            match the column "name" (case-sensitive). </i></b>
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> an array of JSON objects whose keys corresponds to the columns prop.
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">rows=&#123; &nbsp; [ &#123;name: "Sarah", age: 24&#125;, &#123;name:
                            "Sam", age: 32&#125; ] &nbsp; &#125;</dd>

                        <dt className="col-sm-3"> Notes</dt>
                        <dd className="col-sm-9"> For proper sorting behavior, ensure to pass numbers as column values
                            for number-typed
                            columns.
                        </dd>
                    </dl>

                    {/*====================== Interacting With Data Section ======================*/}

                    <section id={"interactions"}/>

                    <hr width={"95%"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Interacting With Data: </h5>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Disabling </h6>
                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>disableModifications</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether to disable making any changes to the grid, but allows
                            for viewing only.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> boolean</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"90%"}/>

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
                    <hr width={"90%"}/>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Editing </h6>

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
                        <dd className="col-sm-9"><i>editExternally</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> specifies whether the developer wants to handle editing on their own,
                            and not allow for in-line editing as provided.
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
                        <dd className="col-sm-9"> a function that passes two parameters (row object based on "Rows"
                            prop, and it's index)
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
                        <dd className="col-sm-9"><i>editAlways</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> allows for the edit button to always appear
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">false</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>hideOnSubmit</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> specifies whether the edit button should hide everytime a user
                            completes an edit.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">false</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>toggleEditDeleteExternally</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> specifies whether the developer wants to handle showing the
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">false</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>editToggled</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"90%"}/>

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
                    <hr width={"90%"}/>

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
                        <dd className="col-sm-9"><i>allowSelectAll</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">displays a "select all" checkbox in the grid header allowing for
                            selecting rows all at once
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9">false</dd>
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
                    <hr width={"90%"}/>
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
                    <hr width={"90%"}/>
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
                    <hr width={"90%"}/>
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Filtering </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>filterByColumnEnabled</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether columns in the grid can be filtered through.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a callback function</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>filterArray</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>filterArray</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> specifies which column(s) to filter the grid by along with their
                            corresponding values.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">an array of JSON objects with the following properties:
                            <ul style={{textAlign: "left", listStyleType: "none"}}>
                                <li>i. "columnName", which corresponds to values in the "columns" property</li>
                                <li>ii. "value", which is the value to filter that column by.</li>
                            </ul>
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">filterArray=&#123;&nbsp;[&nbsp;&#123;columnName: "name", value:
                            "Adam"&#125;&nbsp;]&nbsp;&#125;</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>filterByColumnEnabled = true </i></dd>
                    </dl>

                    {/*====================== Displaying Data Section ======================*/}

                    <hr width={"95%"}/>
                    <section id={"displaying"}/>
                    <h5 id={"basics"} style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Displaying
                        Data </h5>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Row Details </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>rowDetailsEnabled</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether the rows can be expanded to view additional details.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>rowDetailsContent</i></dd>
                    </dl>

                    <hr width={"85%"}/>
                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>rowDetailsContent</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">the content to display when a row gets expanded.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a callback function. When a row is expanded, it passed in the row
                            object as a parameter. The object is formatted where the keys correspond to the columns
                            prop.
                        </dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>rowDetailsEnabled = true</i></dd>
                    </dl>

                    {/* ========= Next Section ==== */}
                    <hr width={"90%"}/>
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Grouping </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>groupsEnabled</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether the rows in the grid should be grouped by a specified
                            column.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>groupBy</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>groupBy</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> the column to group the rows by.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> a string whose value corresponds to a column in the "columns"
                            property.
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">groupBy=&#123;"name"&#125;</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>groupsEnabled = true</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"90%"}/>
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Summarizing </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>summaryItemsEnabled</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> toggles whether to show a "summary" section on a corresponding column.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>summaryItems</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>summaryItems</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> the column to provide a summary for
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">an array of JSON object with the following properties:
                            <ul style={{textAlign: "left", listStyleType: "none"}}>
                                <li>i. "columnName", which corresponds to a value in the "columns" property</li>
                                <li>ii. "type", which is the type of summary to provide. Can be one of the following:
                                </li>
                                <ul style={{textAlign: "left", listStyleType: "none"}}>
                                    <li>-sum</li>
                                    <li>-max</li>
                                    <li>-min</li>
                                    <li>-avg</li>
                                    <li>-count</li>
                                </ul>
                            </ul>
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">summaryItems=&#123;&nbsp; [&nbsp;&#123;columnName: "price", type:
                            "sum"&#125;&nbsp;]&nbsp;&#125;</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>summaryItems = true</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>summaryIsCustomized</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> toggles whether the developer will pass in their own summary value.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs To Have</dt>
                        <dd className="col-sm-9"><i>summaryValue</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>summaryValue</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> the summary value to display. Note: this value will override the
                            internal summary's calculated value.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">string or numeric</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed When</dt>
                        <dd className="col-sm-9"><i>summaryIsCustomized = true</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"90%"}/>
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Column Reordering </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>colReorder</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether the user is allowed to reorder the columns.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>
                    </dl>

                    {/*====================== Sorting Section ======================*/}

                    <hr width={"95%"}/>
                    <section id={"sorting"}/>
                    <h5 id={"basics"} style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Sorting </h5>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>gridSorting</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> specifies the sorting on the grid based on a specified column from the
                            "columns" property, and order
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">an array of JSON object where the property is the column name, and
                            value is either "asc" or "desc".
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">gridSorting=&#123;&nbsp; [&nbsp;&#123;name:
                            "asc"&#125;&nbsp;]&nbsp;&#125;</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>sortingColumnExtensions</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">allows the developer to specify how data should be sorted for specified
                            column(s).
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">an array of JSON objects that contain the following properties:
                            <ul style={{textAlign: "left", listStyleType: "none"}}>
                                <li>i. "columnName", which corresponds to a value in the "columns" property</li>
                                <li>ii. "compare", which is a callback compare function that takes two parameters, and
                                    returns 0, 1, or -1.
                                    <br/><br/><i><b>Here's an example for comparing dates:</b></i>
                                    <br/>&emsp;const compareDates = (a,b) => &#123;
                                    <br/>&emsp;&emsp;if (&nbsp;(a === null && b === null) &nbsp; || &nbsp;(a ===
                                    undefined && b === undefined)&nbsp;) <br/>
                                    &emsp;&emsp;&emsp;return 1;
                                    <br/>&emsp;&emsp;else if (a === null &nbsp; || &nbsp;a === undefined) <br/>
                                    &emsp;&emsp;&emsp;return -1;
                                    <br/>&emsp;&emsp;else if (b === null &nbsp; || &nbsp;b === undefined) <br/>
                                    &emsp;&emsp;&emsp;return 1;
                                    <br/>&emsp;&emsp;else &#123; <br/>
                                    &emsp;&emsp;&emsp;const dateA = Date.parse(a);<br/>
                                    &emsp;&emsp;&emsp;const dateB = Date.parse(b);<br/>
                                    <br/>
                                    &emsp;&emsp;&emsp;if (dateA === dateB)<br/>
                                    &emsp;&emsp;&emsp;&emsp;return 0;<br/>
                                    &emsp;&emsp;&emsp;return (dateA &lt; dateB) ? -1 : 1;
                                    <br/>&emsp;&emsp;&#125;
                                    <br/>&emsp;&#125;
                                </li>
                            </ul>
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">sortingColumnExtensions=&nbsp;[&nbsp;&#123;columnName: "name", compare:
                            compareDates&#125;&nbsp;]
                        </dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>remoteSorting</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether remote sorting is implemented to this grid or not.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs to Have</dt>
                        <dd className="col-sm-9"><i>selectedSorting</i></dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>selectedSorting</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">a function called by GridComponent when the user toggles to sort by a
                            specific column.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a callback function that receives a JSON object as parameter containing
                            column name and order.
                        </dd>

                        <dt className="col-sm-3"> Sample Parameter</dt>
                        <dd className="col-sm-9">&#123;name: asc&#125;</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                        <dd className="col-sm-9"><i>remoteSorting</i></dd>
                    </dl>


                    {/*====================== Paging Section ======================*/}

                    <hr width={"95%"}/>
                    <section id={"paging"}/>
                    <h5 id={"basics"} style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Paging </h5>

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
                        <dd className="col-sm-9"><i>remotePaging</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">toggles whether remote paging is implemented to this grid or not.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needs to Have</dt>
                        <dd className="col-sm-9"><i>totalCount, currentPage, changeCurrentPage, currentPageSize,
                            changeCurrentPageSize</i></dd>
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
                        <dd className="col-sm-9"><i>changeCurrentPage</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">a function called by GridComponent whenever the user clicks to view
                            another page.
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
                        <dd className="col-sm-9"><i>changeCurrentPageSize</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">a function called by GridComponent whenever the user clicks to view
                            more rows per page.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">callback function</dd>

                        <dt className="col-sm-3" style={{color: "red"}}>Needed By</dt>
                        <dd className="col-sm-9"><i>remotePaging</i></dd>
                    </dl>

                    {/*====================== Styling ======================*/}

                    <hr width={"95%"}/>
                    <section id={"styling"}/>
                    <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Styling </h5>

                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Grid Appearance </h6>
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

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>columnWidths</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> the specified column widths for each column. If not specified, the
                            default will be applied. <b><i> Object keys must match the column "name"
                                (case-sensitive). </i></b>
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> JSON object whose keys corresponds to the columns "name" prop.
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9">columnWidths=&#123;&nbsp;&#123;name: 100, age:
                            50&#125;&nbsp;&#125;</dd>

                        <dt className="col-sm-3"> Default</dt>
                        <dd className="col-sm-9"> 180</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>hiddenColumns</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> a list of hidden columns on the grid.</dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> an array of columns whose values correspond to columns in the
                            "columns" property.
                        </dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>buttonColors</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">allows the developer to pass in their own values for the colors of the
                            button text and background in the grid.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">a JSON object that contains one or more of the following property
                            pairs:
                            <ul style={{textAlign: "left", listStyleType: "none"}}>
                                <li>-Create Button:
                                    <ul style={{textAlign: "left", listStyleType: "none"}}>
                                        <li>i. "createColor" = the background color of create button</li>
                                        <li>ii. "createTextColor" = the text color of create button</li>
                                    </ul>
                                </li>
                                <li>-Edit Button:
                                    <ul style={{textAlign: "left", listStyleType: "none"}}>
                                        <li>i. "editColor" = the background color of edit button</li>
                                        <li>ii. "editTextColor" = the text color of edit button</li>
                                    </ul>
                                </li>
                                <li>-Delete Button:
                                    <ul style={{textAlign: "left", listStyleType: "none"}}>
                                        <li>i. "deleteColor" = the background color of delete button</li>
                                        <li>ii. "deleteTextColor" = the text color of delete button</li>
                                    </ul>
                                </li>
                                <li>-Refresh Button:
                                    <ul style={{textAlign: "left", listStyleType: "none"}}>
                                        <li>i. "refreshColor" = the background color of refresh button</li>
                                        <li>ii. "refreshTextColor" = the text color of refresh button</li>
                                    </ul>
                                </li>
                            </ul>
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9"> buttonColors=&nbsp;&#123; <br/>
                            &emsp;&emsp;createColor: "#849AB3"<br/>
                            &emsp;&emsp;createTextColor: "white"<br/>

                            <br/>

                            &emsp;&emsp;editColor: "#849AB3"<br/>
                            &emsp;&emsp;editTextColor: "white"<br/>

                            <br/>

                            &emsp;&emsp;deleteColor: "#849AB3"<br/>
                            &emsp;&emsp;deleteTextColor: "white"<br/>

                            <br/>

                            &emsp;&emsp;refreshColor: "#849AB3"<br/>
                            &emsp;&emsp;refreshTextColor: "white"<br/>

                            &nbsp; &#125;
                        </dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"90%"}/>
                    <h6 style={{textAlign: "left", paddingLeft: 100, color: "gray"}}> Grid Customizations </h6>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>gridContainerClass</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">a class name to give to the container of the GridComponent to allow for
                            CSS manipulation
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">string</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>showPagingPanel</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9">specifies whether the paging panel (page size, current/next/previous
                            page) at the bottom of the grid is shown
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9">boolean</dd>
                    </dl>

                    {/*-----Next Entry-----*/}
                    <hr width={"85%"}/>

                    <dl className="row">
                        <dt className="col-sm-3">Name</dt>
                        <dd className="col-sm-9"><i>tableCell</i></dd>

                        <dt className="col-sm-3"> Description</dt>
                        <dd className="col-sm-9"> the specified styling/behavior for cells of the table; can be used for
                            defining how cells should appear for certain columns, onClick callbacks when clicking a
                            table data, etc.
                        </dd>

                        <dt className="col-sm-3"> Value</dt>
                        <dd className="col-sm-9"> a function whose parameter is a JSON object contains &#123;row,
                            column, ...restProps&#125;, and the function returns an instance of &#60;Table.Cell/&#62;
                        </dd>

                        <dt className="col-sm-3"> Example</dt>
                        <dd className="col-sm-9"><b><i>below demonstrates a table cell for the "add" column to display
                            an add icon, then performing callback function upon clicking</i></b>
                            <br/>&emsp;tableCell=&#123;
                            &emsp;(&#123;row, column, ...restProps&#125;) => &#123; <br/>
                            &emsp;&emsp;if (column.title === "Add") &#123;<br/>
                            &emsp;&emsp;&emsp;return &#60;Table.Cell
                            <br/>&emsp;&emsp;&emsp;&emsp;row=&#123;row&#125;
                            <br/>&emsp;&emsp;&emsp;&emsp;&#123;...restProps&#125;
                            <br/>&emsp;&emsp;&emsp;&emsp;className=&#123;'icon'&#125;
                            <br/>&emsp;&emsp;&emsp;&#62;
                            <br/>&emsp;&emsp;&emsp;&emsp;&#60;div style=&#123;&#123;width:
                            "1vw"&#125;&#125; onClick=&#123;() =&#62; this.showAdditionalInfoPopup(true, row,
                            "add")&#125;&#62;
                            <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&#60;Image
                            src=&#123;create&#125; style=&#123;&#123;display: "inline"&#125;&#125;/&#62;
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

                </section>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        );
    }
}

export default GridComponentInfo;