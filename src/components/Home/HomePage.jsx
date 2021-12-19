import React from 'react';
import {Container} from 'react-bootstrap';
import WelcomeView from "./WelcomeView";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return <Container style={{textAlign: "left"}}>
            <WelcomeView />
        </Container>
    };
}
export default HomePage;
