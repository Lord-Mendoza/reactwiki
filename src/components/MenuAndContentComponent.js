import React, {Component} from "react";
import {Button, Header, Icon, Menu, Segment, Sidebar} from "semantic-ui-react";
import {isNotAnEmptyArray} from "../utilities/helpers/ArrayVariableValidators";
import {Carousel, Col, Row} from "react-bootstrap";
import {isNotAnEmptyObject, isNotNullNorUndefined} from "../utilities/helpers/ObjectVariableFunctions";
import {isNotEmptyString} from "../utilities/helpers/StringVariableValidators";
import Prism from "prismjs";
import "../styling/MenuAndContentComponent.css";
import '../styling/ComponentStyling.css';

export default class MenuAndContentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: "",
            showSidebar: true
        }

        this.changeActiveKey = (e, {name}) => this.setState({activeKey: name});
        this.toggleSidebar = openSidebar => {
            if (isNotNullNorUndefined(openSidebar))
                this.setState({showSidebar: openSidebar});
            else
                this.setState({showSidebar: !this.state.showSidebar});
        }
    }

    componentDidMount() {
        this.setState({
            activeKey: this.props["defaultMenuItemSelected"] ? this.props["defaultMenuItemSelected"] : "",
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps["title"] !== this.props["title"]) {
            this.setState({
                activeKey: this.props["defaultMenuItemSelected"] ? this.props["defaultMenuItemSelected"] : ""
            })
        }

        if (this.state.activeKey !== prevState.activeKey) {
            Prism.highlightAll();
            window.scrollTo(0, 0)
            this.setState({showSidebar: false});
        }
    }

    render() {
        //Render section
        const {title, menuItems, contentItems, darkMode} = this.props;
        const {activeKey, showSidebar} = this.state;
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
                                       active={activeKey === menuOption["key"]}
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
                                                active={activeKey === item["key"]}
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

            let includePropPostFix = contentItems[activeKey]["includePropPostFix"] !== false;

            content = contentItems[activeKey]["properties"].map((content) => {
                const {
                    name, description, value, defaultValue, showDefaultValueAsCode, example, notes, requires,
                    title, subtitle
                } = content;

                if (name === "sectionDivider") {
                    return <Header as='h3' block inverted={darkMode}>
                        {isNotNullNorUndefined(title) && <Header.Content>{title}</Header.Content>}
                        {isNotNullNorUndefined(subtitle) &&
                            <Header.Subheader style={{paddingTop: ".5em"}}>{subtitle}</Header.Subheader>}
                    </Header>
                } else {
                    let postFix = includePropPostFix ? "Prop" : "";
                    return <Segment raised inverted={darkMode}>
                        {isNotNullNorUndefined(name) &&
                            <Row noGutters style={{paddingBottom: '.5em', paddingLeft: "1em"}}><h4><code
                                className="property">{name}</code>{postFix}
                            </h4>
                            </Row>}

                        <Row noGutters>
                            {isNotNullNorUndefined(description) && [<Col xs={3}>Description</Col>,
                                <Col xs={9}>{description}</Col>]}
                            {isNotNullNorUndefined(value) && [<Col xs={3}>Value</Col>, <Col xs={9}>{value}</Col>]}
                            {isNotNullNorUndefined(defaultValue) && showDefaultValueAsCode !== false ? [<Col xs={3}>Default
                                Value</Col>,
                                <Col xs={9}><code className="property"
                                                  style={{marginLeft: 0}}>{defaultValue}</code></Col>] : [<Col xs={3}>Default
                                Value</Col>,
                                <Col xs={9}>{defaultValue}</Col>]}
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

            let sectionTitle;
            if (isNotAnEmptyArray(menuItems)) {
                for (let i = 0; i < menuItems.length; i++) {
                    let currentItem = menuItems[i];

                    if (currentItem.hasOwnProperty("subMenuItems")) {
                        for (let j = 0; j < currentItem["subMenuItems"].length; j++) {
                            let currentSubItem = currentItem["subMenuItems"][j];
                            const subItemKey = currentSubItem["key"];
                            const subItemLabel = currentSubItem["label"];

                            if (subItemKey === activeKey) {
                                sectionTitle = subItemLabel;
                                break;
                            }
                        }
                    } else {
                        const itemKey = currentItem["key"];
                        const itemLabel = currentItem["label"];

                        if (itemKey === activeKey) {
                            sectionTitle = itemLabel;
                            break;
                        }
                    }

                    if (isNotNullNorUndefined(sectionTitle))
                        break;
                }
            }

            if (isNotNullNorUndefined(sectionTitle)) {
                content.unshift(<Segment raised inverted={darkMode}>
                    <h3>{sectionTitle}</h3>
                </Segment>)
            }
        }

        let sidebarButton, sidebarVisibility, sidebarAnimation, sidebarPusherFunc, contentDim, sidebarClassName;
        if (window.screen.width <= 1250) {
            sidebarButton = !showSidebar && <Button icon onClick={this.toggleSidebar} className={'sideMenuToggleBtn'}>
                <Icon name={'chevron right'}/>
            </Button>;
            sidebarAnimation = 'overlay';
            sidebarVisibility = showSidebar;
            sidebarPusherFunc = () => this.toggleSidebar(false);
            contentDim = sidebarVisibility;
        } else if (window.screen.width > 1250) {
            sidebarVisibility = true;
            sidebarAnimation = 'slide along'
            sidebarClassName = 'desktop';
        }

        return (<div className={"menuAndContentComponent " + sidebarClassName}>
            <Sidebar.Pushable as={Segment} className={'sidebarBody'}>
                {sidebarButton}

                <Sidebar as={Menu}
                         animation={sidebarAnimation}
                         direction={'left'}
                         inverted={darkMode}
                         vertical
                         visible={sidebarVisibility}
                         className={sidebarClassName}
                >
                    {menuOptions}
                </Sidebar>

                <Sidebar.Pusher dimmed={contentDim}
                                onClick={sidebarPusherFunc}
                                className={'sidebarContent'}>
                    <div style={{minHeight: "100vh"}}>
                        {content}
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>)
    }
}