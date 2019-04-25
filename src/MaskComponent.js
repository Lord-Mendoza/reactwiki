import React ,{Component} from 'react';
import './ComponentStyling.css';
import {Image} from "react-bootstrap";

class MaskComponent extends Component{
    constructor(props){
        super(props);
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

    render(){
        return(
            <div>
                <h1 className="display-4" style={{textAlign: "left", paddingLeft: 10}}>Mask Component</h1>

                <h3 style={{textAlign: "left", paddingLeft: 50}}> Demonstration </h3>

                <Image
                    src="/maskcomponent.gif"
                    alt="Code for rendering form"
                    style={{width: "50%"}}
                />

                {/*=======================================================
                   ====================== Next Section ===================
                   =======================================================*/}
                <hr/>
                <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                <pre className="prettyprint lang-html">
                    <code>
                        <br/>
                        <p> &lt;MaskComponent </p>
                        <p>     //Required Ones </p>
                        <p>     header=&#123;"Please Wait"&#125;</p>
                        <p>     content=&#123;"Loading"&#125;</p>
                        <p>     show=&#123;this.state.toggleShow&#125;</p>
                        <br/>

                        <p>     //Optional One </p>
                        <p>     loadingIcon=&#123;true&#125; </p>
                        /&gt;
                    </code>
                </pre>

                {/*=======================================================
                ====================== Next Section ======================
                =======================================================*/}
                <hr/>
                <h3 style={{textAlign: "left", paddingLeft: 50}}> APIs </h3>

                <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>
                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> header </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> The title of the popup. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> String </dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> content </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> The message to appear in the mask popup. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> String </dd>
                </dl>

                {/*-----Next Entry-----*/}
                <hr width={"85%"}/>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> show </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}>Toggles whether to show the mask or not.</dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean </dd>

                    <dt className="col-sm-3"> Note </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}>It's ideal to assign a parent's state property here to toggle when to show a mask or not (which is ideal when performing a background process)</dd>
                </dl>

                {/*====================== Additional Section ======================*/}

                <hr width={"90%"}/>
                <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional Customization </h5>

                <dl className = "row">
                    <dt className="col-sm-3"> Name </dt>
                    <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> loadingIcon </dd>

                    <dt className="col-sm-3"> Description </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Toggles whether to show a rotating loading icon in the content. </dd>

                    <dt className="col-sm-3"> Values </dt>
                    <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean </dd>
                </dl>
            </div>
        );
    }
}

export default MaskComponent;

