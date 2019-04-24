import React ,{Component} from 'react';
import './FormComponent.css';

class FormComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>

                    <h1 className="display-4" style={{textAlign: "left", paddingLeft: 10}}>Form Component</h1>

                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Demonstration </h3>


                    <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Usage </h3>

                    <div className="highlight">
                    <pre><code>&lt;FormComponent/&gt;;
                    </code></pre>
                    </div>

                    <h3 style={{textAlign: "left", paddingLeft: 50}}> APIs </h3>
                    <dl className = "row">
                        <dt className="col-sm-3"> Name </dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> configuration</dd>

                        <dt className="col-sm-3"> Description </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            <p>The list of form components to be generated where the label, type, placeholder and options (if applicable) are defined for each component.</p>
                            <p>Notes:
                                -Placeholder is an available option only to text-based form components. </p>
                            <p>-When using the “select” type, the options property needs to be specified to render the available options of the select box.
                                See example for sample usage. </p>
                        </dd>

                        <dt className="col-sm-3"> Values </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> An array of JSON objects</dd>

                        <dt className="col-sm-3"> Example </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                    </dl>

                    <hr width={"50%"}/>

                    <dl className = "row">
                        <dt className="col-sm-3"> Name </dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> formValues</dd>

                        <dt className="col-sm-3"> Description </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> This property uses the supplied callback function to pass the form values as typed by the user. </dd>

                        <dt className="col-sm-3"> Values </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> A callback function </dd>

                        <dt className="col-sm-3"> Example </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                    </dl>

                    <hr width={"50%"}/>

                    <dl className = "row">
                        <dt className="col-sm-3"> Name </dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> submitForm</dd>

                        <dt className="col-sm-3"> Description </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            <p>Toggles the FormComponent to submit the retrieved values from the user through the formValues callback function.</p>
                            <p>Note: This will not clear the form.</p>
                        </dd>

                        <dt className="col-sm-3"> Values </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean </dd>

                        <dt className="col-sm-3"> Example </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                    </dl>

                    <hr width={"50%"}/>

                    <dl className = "row">
                        <dt className="col-sm-3"> Name </dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> clearForm</dd>

                        <dt className="col-sm-3"> Description </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Toggles the FormComponent to clear the form. </dd>

                        <dt className="col-sm-3"> Values </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Boolean </dd>

                        <dt className="col-sm-3"> Example </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> Here's an example </dd>
                    </dl>

                    <hr width={"50%"}/>

                    <dl className = "row">
                        <dt className="col-sm-3"> Name </dt>
                        <dd className="col-sm-9" style={{textAlign: "left", fontStyle: "italic"}}> markInvalid</dd>

                        <dt className="col-sm-3"> Description </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}>
                            <p>This property is used by FormComponent to filter out the components that are invalid. Once marked invalid, the form component will have a red on its surrounding, highlighting to the user where they need to revise their entry.</p>
                            <p>Note: FormComponent does not directly handle validating forms as to allow flexibility & prevent too much customized design. </p>
                        </dd>

                        <dt className="col-sm-3"> Values </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> An array </dd>

                        <dt className="col-sm-3"> Example </dt>
                        <dd className="col-sm-9" style={{textAlign: "left"}}> [ “Full name”, “Date of birth”] </dd>
                    </dl>

                </div>
            </div>
        );
    }
}

export default FormComponent;