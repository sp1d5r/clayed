import React from 'react';
import WelcomeStationary from "../../images/red-spin/welcome.png"
import WelcomeSpin from "../../images/red-spin/output.gif"
import {Row, Col} from 'react-bootstrap';
import "../../styles/styles.css";

class WelcomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover:false};
    }

    setIsShown = (res) => {
        console.log(res);
        this.setState({hover: res});
    };

    render() {

        return <div style={{
                height: "150%", backgroundColor: "",
            }}>
                <Row style={{backgroundColor: "",}}>
                    <Col >
                        <img style={{height:'auto',width:'100%'}}
                             src={this.state.hover ? WelcomeSpin : WelcomeStationary} alt={"transparent nft"}
                             onMouseEnter={() => this.setIsShown(true)}
                             onMouseLeave={() => this.setIsShown(false)}
                        />
                    </Col>
                    <Col>
                        <Row style={{height: "100%", backgroundColor: ""}} className={"align-container"}>
                            <div className={"vertical-centers"} style={{margin: "auto", paddingRight: "10%", paddingTop: "15%"}}>
                                <p id="text-medium" style={{
                                    textAlign: "right",
                                    margin: 0,
                                }}>
                                    I'm high again
                                </p>
                                <p id="text-large" style={{
                                    textAlign: "right",
                                    margin: 0,
                                }}>
                                    fuck
                                </p>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
    };
}
export default WelcomeView;
