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
            </div>
        );
    }
}

export default PopUpComponent;