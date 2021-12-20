import React from 'react';
import WelcomeStationary from "../../images/red-spin/welcome.png"
import WelcomeSpin from "../../images/red-spin/output.gif"
import {Row, Col} from 'react-bootstrap';
import {BrowserView, MobileView} from 'react-device-detect';
import "../../styles/styles.css";

class IntroductionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover:false};
    }


    render() {

        return <div style={{
            height: 500,
            marginTop: 50,
            backgroundColor: "",
        }}>
            <Row style={{paddingLeft: "2%", paddingTop: "2%"}}>
                <Col>
                    <Row>
                        <p id={"text-medium"}>
                            <span>CLAY
                                <span style={{color:"#641E16", textDecoration:'line-through', textDecorationThickness: 10}}>
                                    <span style={{color:"#24242c"}}>
                                        STON
                                    </span>
                                </span>
                                ED
                            </span>
                        </p>
                    </Row>
                    <Row>
                        <BrowserView>
                            <span id={"text-small-normal"} >
                                Stoned is a collection 5,000 unique, 3D modelled, Cardano based NFT collectibles each generated
                                with their unique stoner vibe. Our project goal is oriented around making an affordable NFT
                                people actually want to buy. With our own <b>BAKED OVEN</b> we can generate your own stoner derivatives
                                and return to you on the blockchain. The baking process can vary from indica to sativa stain, each
                                resulting in a different kind of stoner. Once your stoner is baked it's procedural carbons are stored
                                ensuring a unique Clayed Character for all.
                            </span>
                        </BrowserView>
                        <MobileView>
                            <span id={"text-small-normal"}>
                                Stoned is a collection 5,000 unique, 3D modelled, Cardano based NFT collectibles each generated
                                with their unique stoner vibe. Our project goal is oriented around making an affordable NFT
                                people actually want to buy. </span>
                            <br/>
                            <br/>
                            <span id={"text-small-normal"}>
                                With our own <b>BAKED OVEN</b> we can generate your own stoner derivatives
                                and return to you on the blockchain. The baking process can vary from indica to sativa stain, each
                                resulting in a different kind of stoner.
                            </span>
                            <br/>
                            <br/>
                            <span id={"text-small-normal"}>
                                Once your stoner is baked it's procedural carbons are stored
                                ensuring a unique Clayed Character for all.
                            </span>
                        </MobileView>
                    </Row>
                </Col>
            </Row>
        </div>
    };
}
export default IntroductionView;
