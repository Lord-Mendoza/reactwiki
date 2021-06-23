import React from "react";
import {Header, Icon, Menu, Segment} from "semantic-ui-react";
import {isNotAnEmptyArray} from "../utilities/helpers/ArrayVariableValidators";
import {Carousel, CarouselItem, Col, Container, Row} from "react-bootstrap";
import {isNotAnEmptyObject, isNotNullNorUndefined} from "../utilities/helpers/ObjectVariableValidators";
import {isNotEmptyString} from "../utilities/helpers/StringVariableValidators";
import Prism from "prismjs";
import "../styling/MenuAndContentComponent.css";
import '../styling/ComponentStyling.css';

class MenuAndContentComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: props["defaultMenuItemSelected"] ? props["defaultMenuItemSelected"] : ""
        };

        this.changeActiveKey = (e, {name}) => this.setState({activeKey: name});
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        Prism.highlightAll();
    }

    render() {
        const {title, menuItems, contentItems, darkMode} = this.props;
        const {activeKey} = this.state;

        let generateSubMenu = (subMenu) => {
            let links = [];

            if (!Array.isArray(subMenu["subMenuItems"]))
                return subMenu["subMenuItems"](this.changeActiveKey)
            else {
                subMenu["subMenuItems"].forEach(menuOption => {
                    if (menuOption.hasOwnProperty("subMenuItems"))
                        links.push(generateSubMenu(menuOption));
                    else {
                        links.push(
                            <Menu.Item name={menuOption["key"]}
                                       active={this.state["activeKey"] === menuOption["key"]}
                                       onClick={this.changeActiveKey}>
                                {menuOption["label"]}
                            </Menu.Item>
                        );
                    }
                })
            }

            return (<Menu.Item>
                <Menu.Header>{subMenu["label"]}</Menu.Header>
                <Menu.Menu>
                    {links}
                </Menu.Menu>
            </Menu.Item>);
        }

        let menuOptions = [];
        if (isNotAnEmptyArray(menuItems)) {
            menuItems.forEach(item => {
                if (item.hasOwnProperty("subMenuItems")) {
                    let subMenuItems = generateSubMenu(item);
                    menuOptions.push(subMenuItems)
                } else {
                    menuOptions.push(<Menu.Item name={item["key"]}
                                                active={this.state["activeKey"] === item["key"]}
                                                onClick={this.changeActiveKey}>
                        <Menu.Header>{item["label"]}</Menu.Header>
                    </Menu.Item>);
                }
            })

            if (isNotEmptyString(title)) {
                let style = {backgroundColor: '#BFBFBF'}
                if (darkMode) {
                    style = {backgroundColor: '#576069', color: 'white'};
                }
                menuOptions.unshift(
                    <Menu.Item as='h3'
                               header
                               content={title}
                               style={style}
                    />
                );
            }
        }

        let content;
        if (isNotAnEmptyObject(contentItems)
            && contentItems.hasOwnProperty(activeKey)
            && isNotAnEmptyArray(contentItems[activeKey]["properties"])) {

            content = contentItems[activeKey]["properties"].map((content) => {
                const {
                    name, description, value, defaultValue, example, notes, requires,
                    title, subtitle
                } = content;

                if (name === "sectionDivider") {
                    return <Header as='h3' block inverted={darkMode}>
                        {isNotNullNorUndefined(title) && <Header.Content>{title}</Header.Content>}
                        {isNotNullNorUndefined(subtitle) && <Header.Subheader style={{paddingTop: ".5em"}}>{subtitle}</Header.Subheader>}
                    </Header>
                } else {
                    return <Segment raised inverted={darkMode}>
                        <Row noGutters style={{paddingBottom: '.5em'}}><h4><code className="property">{name}</code>Prop
                        </h4>
                        </Row>

                        <Row noGutters>
                            {isNotNullNorUndefined(description) && [<Col xs={3}>Description</Col>,
                                <Col xs={9}>{description}</Col>]}
                            {isNotNullNorUndefined(value) && [<Col xs={3}>Value</Col>, <Col xs={9}>{value}</Col>]}
                            {isNotNullNorUndefined(defaultValue) && [<Col xs={3}>Default Value</Col>,
                                <Col xs={9}><code className="property"
                                                  style={{marginLeft: 0}}>{defaultValue}</code></Col>]}
                            {isNotAnEmptyArray(requires) && [<Col xs={3}><span
                                style={{fontWeight: "bold", color: "red"}}>Requires</span></Col>,
                                <Col xs={9}>{
                                    requires.map((v, index, array) => {
                                        let commaSeparator;
                                        if (array[index + 1])
                                            commaSeparator = <span>,&nbsp;&nbsp;</span>;

                                        return [
                                            <code className="property" style={{marginLeft: 0}}>{v}</code>,
                                            commaSeparator
                                        ]
                                    })
                                }</Col>
                            ]}
                            {isNotNullNorUndefined(notes) && [<Col xs={3}><span className={"notes"}>Notes</span></Col>,
                                <Col xs={9}>{notes}</Col>]}
                            {isNotEmptyString(example) && [<Col xs={3}>Example</Col>, <Col xs={9}>
                                <section className={"codeSample"}>
                                <pre className="language-javascript">
                                            <code>
                                                {example}
                                            </code>
                                        </pre>
                                </section>
                            </Col>]}
                        </Row>
                    </Segment>
                }
            });

            if (contentItems[activeKey].hasOwnProperty("images") && isNotAnEmptyArray(contentItems[activeKey]["images"])) {
                content.unshift(<Segment raised inverted={darkMode}>
                    <Carousel interval={null}
                              controls={contentItems[activeKey]["images"].length !== 1}
                              indicators={contentItems[activeKey]["images"].length !== 1}
                              className={"menuAndContentCarousel"}
                    >

                        {contentItems[activeKey]["images"].map(imageObj => (
                            <Carousel.Item>
                                <img className='d-block w-100'
                                     src={imageObj["image"]}
                                     alt={imageObj["image"]}
                                />
                                {imageObj.hasOwnProperty("caption") && <Carousel.Caption>
                                    <h3>{imageObj["caption"]}</h3>
                                </Carousel.Caption>}
                            </Carousel.Item>))}
                    </Carousel>
                </Segment>)
            }

            if (contentItems[activeKey].hasOwnProperty("introduction")) {
                content.unshift(<Segment raised inverted={darkMode}>
                    <h4>{contentItems[activeKey]["introduction"]}</h4>
                </Segment>)
            }

            if (contentItems[activeKey].hasOwnProperty("conclusion"))
                content.push(<Segment raised inverted={darkMode}>
                    {contentItems[activeKey]["conclusion"]}
                </Segment>)
        }

        let menuPane;
        if (window.screen.width <= 1250) {
            menuPane = <Menu vertical stackable inverted={darkMode} fluid>
                {menuOptions}
            </Menu>;
        } else if (window.screen.width > 1250){
            menuPane = <Col xs={2}>
                <Menu vertical stackable inverted={darkMode} fluid>
                    {menuOptions}
                </Menu>
            </Col>
        }

        return (<div className={"menuAndContentComponent"}>
            <Container fluid style={{paddingTop: "10px", paddingBottom: "10px"}}>
                <Row>
                    {menuPane}

                    <Col style={{paddingLeft: '1em'}}>
                        {content}
                    </Col>
                </Row>
            </Container>
        </div>)
    }
}

export default MenuAndContentComponent;