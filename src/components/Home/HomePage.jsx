import React from 'react';
import {Container} from 'react-bootstrap';
import WelcomeView from "./WelcomeView";
import IntroductionView from "./IntroductionView";
import BakedOvenView from "./BakedOvenView";
import StrainsView from "./StrainsView";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return <div>
            <Container style={{textAlign: "left"}}>
                <WelcomeView />
                <IntroductionView />
            </Container>
            <BakedOvenView />
            <Container style={{textAlign: "left"}}>
                <StrainsView />
            </Container>
        </div>
    };
}
export default HomePage;
