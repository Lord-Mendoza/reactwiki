import React ,{Component} from 'react';
import './PopUpComponent.css';

class PopUpComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>

                    <h1 className="display-4" style={{textAlign: "left", paddingLeft: 10}}>PopUp Component</h1>

                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Demonstration </h3>


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
            </div>
        );
    }
}

export default PopUpComponent;