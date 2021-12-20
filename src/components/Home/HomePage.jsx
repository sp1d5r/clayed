import React from 'react';
import {Container} from 'react-bootstrap';
import WelcomeView from "./WelcomeView";
import IntroductionView from "./IntroductionView";
import BakedOvenView from "./BakedOvenView";

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
        </div>
    };
}
export default HomePage;
