import React ,{Component} from 'react';
import './ComponentStyling.css';
import {Carousel} from "react-bootstrap";

class PopUpComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>

                <h1 className="display-4" style={{textAlign: "left", paddingLeft: 10}}>PopUp Component</h1>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <hr/>
                <h3 style={{textAlign: "left", paddingLeft: 50}}> Available Configurations </h3>

                <Carousel pauseOnHover={true}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/closeOnly.png"
                            alt="Render for closeOnly"
                        />
                        <Carousel.Caption>
                            <h3>footerConfig = "closeOnly"</h3>
                            <p>Displays only a close button.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/simple.png"
                            alt="Render for simple"
                        />

                        <Carousel.Caption>
                            <h3>viewConfig = "simple"</h3>
                            <p>Builds on top of "bare" but provides a refresh button.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/search.png"
                            alt="Render for search"
                        />

                        <Carousel.Caption>
                            <h3>viewConfig = "search"</h3>
                            <p>Builds on top of "simple" but provides search-by-column functionality</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/all.png"
                            alt="Render for all"
                        />

                        <Carousel.Caption>
                            <h3>viewConfig = "all"</h3>
                            <p>Builds on top of "search" but provides options to add, edit, and delete rows.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/allnosearch.png"
                            alt="Render for allnosearch"
                        />

                        <Carousel.Caption>
                            <h3>viewConfig = "allnosearch"</h3>
                            <p>Presents the same features of "all", but excludes search-by-column functionality.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Usage </h3>

                <div className="highlight">
                <pre><code>&lt;PopUpComponent/&gt;;
                </code></pre>
                </div>

                <h3 style={{textAlign: "left", paddingLeft: 50}}> APIs </h3>
                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> header</dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> The title of the popup. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> A string.</dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>

                <hr width={"50%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> content</dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> The content of the popup. PopupComponent offers flexibility on the content, such as placing another component (ex. FormComponent) inside. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> An object </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>

                <hr width={"50%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> footerConfig</dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}>
                        The buttons to appear at the foot of the popup.
                        Note: providing the value of “custom” requires for customFooter to be defined
                    </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}>
                        <p>A string of either</p>
                        <p>i. “custom” = giving the developer the option to define their own buttons in the footer</p>
                        <p>ii. “closeOnly” = renders only a close button to close the popup.</p>
                        <p>iii. “submit” = renders a close button as well as submit button.</p>
                        <p>iv. “all” = renders a close, reset, & submit button. Ideal for forms</p>
                    </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>

                <hr width={"50%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> resetToggled</dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> When “footerConfig” is set to “all”, this must be included to respond to the user's desire to reset what's placed in the content body. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>

                <hr width={"50%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> submitToggled</dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}>
                        When “footerConfig” is set to “all” or “submit”, this must be included to respond to the user's desire to submit what's placed in the content body.
                    </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>
            </div>
        );
    }
}

export default PopUpComponent;