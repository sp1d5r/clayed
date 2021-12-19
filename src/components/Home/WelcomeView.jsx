import React from 'react';
import WelcomeStationary from "../../images/red-spin/welcome.png"
import WelcomeSpin from "../../images/red-spin/output.gif"
import {Row, Col} from 'react-bootstrap';

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
                        <Row style={{height: "100%", backgroundColor: ""}}>
                            <div style={{margin: "auto", paddingRight: "10%", paddingTop: "10%"}}>
                                <p style={{
                                    fontWeight: "bold",
                                    textAlign: "right",
                                    fontSize: 30,
                                    margin: 0,
                                }}>
                                    I'm high again
                                </p>
                                <p style={{
                                    fontWeight: "bold",
                                    textAlign: "right",
                                    margin: 0,
                                    fontSize: 140
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
