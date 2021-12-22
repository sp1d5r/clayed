import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import {BrowserView, MobileView} from 'react-device-detect';
import "../../styles/styles.css";
import BakedOvenBackground from "./BakedOvenBackground";

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
                                <span>Baked Oven
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
                        <Row style={{paddingTop: "5%"}}>
                            <Button variant="light" style={{width: "max(20%, 150px)", margin: "auto"}} href={"/baked/"}>
                                Get Baked
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <BakedOvenBackground/>
        </div>
    };
}
export default BakedOvenView;
