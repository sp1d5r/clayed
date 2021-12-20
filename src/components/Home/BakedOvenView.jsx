import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {BrowserView, MobileView} from 'react-device-detect';
import "../../styles/styles.css";

class BakedOvenView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover:false};
    }


    render() {

        return <div style={{
            textAlign: "left",
            marginTop: 100,
            color: "#FFFFFF",
            padding: "5%",
            width: "100%",
            backgroundColor: "#242424",
        }}>
            <Container>
                <Row style={{paddingLeft: "2%", paddingTop: "2%"}}>
                    <Col style={{minWidth: 300}}>
                        <Row>
                            <p id={"text-medium"}>
                                <span>baked oven
                                </span>
                            </p>
                        </Row>
                        <Row>
                            <BrowserView>
                                <span id={"text-small-normal"} >
                                    The baked oven is an <b style={{color:"#d5d6ea"}}>innovation</b> in stoner creation. It begins by selecting your attributes
                                    for a more accurate derivative, select your own traits, i.e. skin color, hair color, hair type etc...
                                    Then select the <b style={{color:"#d7ecd9"}}>strain</b>, we have a variety of options from
                                    <b style={{color:"#f5d5cb"}}> Kush</b> to <b style={{color:"#f3ddf2"}}> Gelato</b>. For the non-smokers, we
                                    have a couple of options explaining the features of each weed strain which you can find in the
                                    strains section.
                                </span>
                                <span id={"text-small-normal"}>
                                    Then leave them to bake, don't worry we'll take <b>good</b> care of them...
                                </span>
                            </BrowserView>
                            <MobileView>
                                <span id={"text-small-normal"}>
                                    The baked oven is an <b style={{color:"#d5d6ea"}}>innovation</b> in stoner creation. It begins by selecting your attributes
                                    for a more accurate derivative, select your own traits, i.e. skin color, hair color, hair type etc...
                                </span>
                                <br/>
                                <br/>
                                <span id={"text-small-normal"}>
                                    Then select the <b style={{color:"#d7ecd9"}}>strain</b>, we have a variety of options from
                                    <b style={{color:"#f5d5cb"}}> Kush</b> to <b style={{color:"#f3ddf2"}}> Gelato</b>. For the non-smokers, we
                                    have a couple of options explaining the features of each weed strain which you can find in the
                                    strains section.
                                </span>
                                <br/>
                                <br/>
                                <span id={"text-small-normal"}>
                                    Then leave them to bake, don't worry we'll take <b>good</b> care of them...
                                </span>
                            </MobileView>
                        </Row>
                    </Col>
                    <Col>
                        <span>image of baked chars</span>
                    </Col>
                </Row>
            </Container>
        </div>
    };
}
export default BakedOvenView;
