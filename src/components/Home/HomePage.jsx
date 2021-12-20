import React from 'react';
import {Container} from 'react-bootstrap';
import WelcomeView from "./WelcomeView";
import IntroductionView from "./IntroductionView";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return <Container style={{textAlign: "left"}}>
            <WelcomeView />
            <IntroductionView />
        </Container>
    };
}
export default HomePage;
