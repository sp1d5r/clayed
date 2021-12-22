import React from "react";
import {Container} from "react-bootstrap";
import WelcomeView from "../Home/WelcomeView";

class StrainsPage extends React.Component {
    render() {
        return <div>
            <Container style={{textAlign: "left"}}>
                <WelcomeView />
            </Container>
        </div>;
    }
}

export default StrainsPage;
