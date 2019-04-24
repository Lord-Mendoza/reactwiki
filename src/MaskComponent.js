import React ,{Component} from 'react';
import './MaskComponent.css';

class MaskComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className="display-4" style={{textAlign: "left", paddingLeft: 10}}>Mask Component</h1>

                <h3 style={{textAlign: "left", paddingLeft: 50}}> Demonstration </h3>


                <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Usage </h3>

                <div className="highlight">
                    <pre><code>&lt;MaskComponent/&gt;;
                    </code></pre>
                </div>

                <h3 style={{textAlign: "left", paddingLeft: 50}}> APIs </h3>
                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> header </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> The title of the popup. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> String </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>

                <hr width={"50%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> content </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> The message to appear in the mask popup. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> String </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>

                <hr width={"50%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> show </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}>
                        <p>Toggles whether to show the mask or not.</p>
                        <p>Note: It's ideal to assign a parent's state property here to toggle when to show a mask or not (which is ideal when performing a background process)</p>
                    </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>

                <hr width={"50%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> loadingIcon </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Toggles whether to show a rotating loading icon in the content. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean </dd>

                    <dt className="col-sm-3"> Example </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                </dl>
            </div>
        );
    }
}

export default MaskComponent;

