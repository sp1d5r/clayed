import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class StrainsView extends React.Component{
    render() {
        return <div style={{
            textAlign: "Center",
            marginTop: 100,
            color: "#242424",
            paddingBottom: "5%",
            width: "100%",
            position: "relative"
        }}>
            <Container>
                <Row style={{paddingLeft: "2%", paddingTop: "2%"}}>
                    <Col style={{minWidth: 300}}>
                        <Row>
                            <p id={"text-medium"}>
                                <span>Strains
                                </span>
                            </p>
                        </Row>
                        <Row id={""} >
                            <Col>
                                <Card style={{ width: '100%', padding: "5%"}}>
                                    <svg
                                        style={{margin: "auto"}}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 42 40" width="100" height="100">
                                        <path d="M12 33.1a16 16 0 01-2.6-.2c-.5 0-3-.5-3.3-1.3-.3-.8 1.8-3 4.1-4.5C5.4 24.8 1.3 20.3 1 19a.7.7 0 010-.6c.4-1 5-.6 8.7.4C7.6 14.4 6 7.7 7.2 7c1-.6 5.5 2.7 8.6 6.2C16.3 7.8 18.6 0 20 0s3.7 7.8 4.3 13.2C27.5 9.7 32 6.4 33 7c1.2.6-.4 7.4-2.4 11.7 3.6-.9 8.2-1.2 8.7-.3a.7.7 0 010 .6c-.4 1.3-4.5 5.8-9.4 8.1 2.3 1.5 4.4 3.7 4.2 4.5-.3.8-2.8 1.2-3.4 1.3a14 14 0 01-5.8-.2A7.8 7.8 0 0120 29a7.8 7.8 0 01-4.8 3.7 12 12 0 01-3.4.4zm-5-1.8a13 13 0 008 .5c3.3-1 4.5-3.4 4.6-4.1a.5.5 0 011 0c0 .7 1.3 3.2 4.5 4 3.2 1 7.2 0 8-.4a13 13 0 00-4.4-3.8.5.5 0 010-.9l.7-.3c4.5-2 8.3-6.3 9-7.5a23 23 0 00-8.5 1 .5.5 0 01-.6-.3.5.5 0 010-.3A27.1 27.1 0 0032.4 8c-1 .3-5 3-8 6.7a.5.5 0 01-.9-.2A33.7 33.7 0 0020.1 1a34 34 0 00-3.5 13.3.5.5 0 01-.8.2c-3.1-3.8-7-6.4-8-6.7-.2 1.2.6 6.5 3 11.3a.5.5 0 01-.5.7 23.1 23.1 0 00-8.5-1c.6 1.2 4.5 5.4 9 7.5l.5.3a.5.5 0 01.3.4.4.4 0 01-.2.4A13 13 0 007 31.3z" fill="#004739"></path><path opacity="0.2" d="M41.2 20.8c-.3-.5-4.7-.5-9 .8C34.8 16.4 35.5 10 35 9.7c-.6-.2-5.2 2.6-8.7 6.9-.3-7-3.1-13.7-3.8-13.7-.7 0-3.5 6.8-3.9 13.7-3.5-4.3-8.1-7.2-8.6-6.9-.5.4.2 6.7 3 12-4.5-1.4-8.9-1.4-9.1-.9-.3.6 4 5.7 9.1 8.1l.7.3c-2.7 1.5-4.8 3.9-4.6 4.3.1.6 4.8 2 8.5.8a7.4 7.4 0 004.2-3V40h1.4v-8.6a7.4 7.4 0 004.2 2.9c3.7 1 8.3-.2 8.5-.8.1-.4-1.9-2.8-4.7-4.3.3 0 .5-.2.7-.3 5.2-2.5 9.5-7.5 9.2-8.1z" fill="#017C6B"></path></svg>
                                    <Card.Body>
                                        <Card.Title>Indica</Card.Title>
                                        <Card.Text>
                                            Indicas are a strain that produce more of a calming effect, useful for sleeping
                                            and reducing pain. Most popular indica strains are purple punch, and zkittlez.
                                        </Card.Text>
                                        <Button variant="dark">Indicas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '100%', padding: "5%"}}>
                                    <svg
                                        style={{margin: "auto"}}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 42 40"
                                        width="100"
                                        height="100">
                                        <path d="M7.8 34.5c-.7 0-.8-.2-.9-.4 0 0-.3-.6 1.8-2.7a21 21 0 014.5-3.4l1.2-.6a26.4 26.4 0 01-3.6-1.1 41.2 41.2 0 01-7-3.7C.6 20.4.8 20 .9 19.7c0-.3.3-.7 4.2 0a41.3 41.3 0 017.6 2.2l1.2.5a38.2 38.2 0 01-1.5-2.1 54.3 54.3 0 01-4.2-8C6.3 8 6.7 7.6 7 7.5c.2-.2.6-.4 3.7 3a54.6 54.6 0 015.6 7.1l1 1.8a47.2 47.2 0 010-3.7c0-3.6.2-7 .7-10.5C18.8 0 19.2 0 19.6 0c.3 0 .8 0 1.5 5.3a74 74 0 01.7 14.2l1.1-1.8c1.7-2.7 8.2-10.9 9.3-10.1.3.1.6.4-1.1 4.6a54.1 54.1 0 01-4.2 8 38.3 38.3 0 01-1.5 2.2 34.4 34.4 0 011.2-.5c3.4-1.4 11.3-3.3 11.8-2.2 0 .3.3.7-3.1 3a41 41 0 01-7 3.6 26 26 0 01-3.5 1.2l1.2.6c2.6 1.3 6.8 5 6.3 6s-5.8-.4-8.5-1.9a11.1 11.1 0 01-4.2-3.6 11.1 11.1 0 01-4.1 3.6 20.8 20.8 0 01-5.3 2l-2.4.3zM19.6 27a.4.4 0 01.4.4c.2.6 1.4 2.5 4.2 4a19.7 19.7 0 007 2.1 19.7 19.7 0 00-5.6-4.7 12.3 12.3 0 00-2.7-1 .5.5 0 010-.9 23.6 23.6 0 005.1-1.4 39 39 0 009-5.2 38.7 38.7 0 00-10 2.4 25.6 25.6 0 00-3 1.4.4.4 0 01-.6-.6 33.9 33.9 0 002.7-3.7A52.6 52.6 0 0031.3 9a52.3 52.3 0 00-7.6 9.2 33.1 33.1 0 00-2.2 3.9.5.5 0 01-.5.2.4.4 0 01-.3-.5c.2-2 .4-4 .3-6a70.4 70.4 0 00-1.4-14 70.4 70.4 0 00-1.5 14c0 2 .1 4 .4 6a.5.5 0 01-.8.3 33.2 33.2 0 00-2.2-4A52 52 0 007.9 9 52.6 52.6 0 0013 19.8a33.1 33.1 0 002.8 3.7.5.5 0 01-.6.6 25 25 0 00-3-1.4 38.8 38.8 0 00-10-2.4 39 39 0 009 5.2 23.5 23.5 0 005 1.4.4.4 0 01.4.4.4.4 0 01-.3.5c-1 .2-1.8.6-2.7 1A19.6 19.6 0 008 33.6a19.7 19.7 0 007-2c2.8-1.6 4-3.5 4.1-4.1a.5.5 0 01.5-.4z" fill="#004739"></path><path opacity="0.2" d="M39.3 21.3a30.2 30.2 0 00-12.9 4.1 34.7 34.7 0 002-2.8 40.5 40.5 0 005.5-12c-.3-.1-5.2 4.7-8.6 10a33 33 0 00-2.2 3.8 55 55 0 00-1.5-21.2 55.2 55.2 0 00-1.5 21.2 33 33 0 00-2.1-3.9c-3.5-5.2-8.4-10-8.7-9.8-.3.2 2 6.6 5.4 11.9a36.2 36.2 0 002 2.9 27.6 27.6 0 00-1.9-1A29.1 29.1 0 004 21.2c-.1.4 4.4 4.2 9.3 6.6a25.3 25.3 0 003.6 1.4c-.5 0-1 .2-1.4.3-3.7 1-7.2 3.6-7 4 0 .3 4.3.7 8-.3a10.4 10.4 0 004.6-2.5V40h1.3v-9.2a10.5 10.5 0 004.5 2.4c3.7 1 8 .7 8 .4.2-.4-3.3-3-7-4-.4-.2-.9-.3-1.4-.3a24.7 24.7 0 003.6-1.5c4.9-2.3 9.4-6.2 9.3-6.5z" fill="#017C6B"></path></svg>
                                    <Card.Body>
                                        <Card.Title>Sativa</Card.Title>
                                        <Card.Text>
                                            Sativas provide a more uplifting feeling, it's can be used for physical activities
                                            or activities that require a lot of social interaction. Popular strains include
                                            Green Crack, or Tangie.
                                        </Card.Text>
                                        <Button variant="dark">Sativas</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '100%', padding: "5%"}}>
                                    <svg
                                        style={{margin: "auto"}}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 40"
                                        width="100"
                                        height="100">
                                        <path opacity="0.2" d="M25 19.5c0-.3-4-1-7.9-.6a17.3 17.3 0 00-1.5.2 29.7 29.7 0 008.5-8 28 28 0 00-8 4.4 23.1 23.1 0 00-2.4 2 31.9 31.9 0 001.7-3.8A36.9 36.9 0 0018 3.3c-.2-.1-3.2 4.6-5 9.5a32.4 32.4 0 00-1.2 4 22.8 22.8 0 00-.4-3C10.3 9.3 8.3 5 8 5a27.7 27.7 0 001.2 11.6l-1-1.2c-2.7-2.7-6.2-4.9-6.4-4.7a21.1 21.1 0 006.5 8.4 9.5 9.5 0 00-1-.2c-2.7-.2-5.6.6-5.7 1 0 .2 2.8 1.5 5.4 1.7a7.4 7.4 0 003.7-.5l-2.3 6 .8.4 2.3-6a7.4 7.4 0 002.4 2.6c2.1 1.6 5 2.5 5.2 2.2.1-.2-1.5-2.7-3.6-4.3a8.9 8.9 0 00-.9-.6h2.7c3.8-.3 7.7-1.8 7.7-2zm22.3 3c-.3-.2-3 1-5.5 3 .3-4-1-8.3-1.4-8.4-.4 0-2.6 3-3.6 6.8-2.1-4.4-5.8-8-6.2-7.8-.5.2-.4 5.3 1.3 9.9-3.4-1.8-7.2-2.4-7.4-2-.2.3 2 4 5.1 6.7-3.2.4-6 1.6-6 2 0 .3 4.1 2.4 8 2.6h.6c-1.4 1.7-2 3.8-1.8 4 .1.3 3.5 0 5.6-1.8a5.1 5.1 0 001.9-3l2.4 5.5.8-.4-2.3-5.5a5.1 5.1 0 003.4.8c2.7-.4 5.3-2.5 5.3-2.9 0-.3-2-1.2-4.2-1.4l.4-.4c2.6-3 4-7.4 3.6-7.7z" fill="#017C6B"></path><path d="M17.6 25.8c-.3 0-.9-.1-2-.9a14.8 14.8 0 01-3-2.6 8.1 8.1 0 01-1.8-3.2 8.1 8.1 0 01-3.5 1.3h-4c-2.1-.4-2.2-.8-2.2-1 0-.2 0-.6 1.9-1.4a14.8 14.8 0 013.8-1.2h.6a17.6 17.6 0 01-1.8-1.5A28.5 28.5 0 012 11.2C.2 8.8.5 8.6.7 8.4c.2-.2.4-.5 2.9 1A28.8 28.8 0 018 12.7l.3.3c0-.5-.2-1-.3-1.4a38.3 38.3 0 01-.8-6.2c0-3.4.2-3.4.5-3.5.3 0 .6-.1 1.9 3a39.2 39.2 0 011.9 6l.2 1 .6-2a51.4 51.4 0 013.2-6.7c1.8-3.4 2-3.3 2.4-3.2.3.2.6.3-.2 4a53.1 53.1 0 01-2 7.1l-.8 2 .7-.7A38.5 38.5 0 0121 9.1c3-1.5 3.2-1.2 3.4-1 .2.3.4.5-2 3a38.7 38.7 0 01-4.7 4.2l-1 .8h.4c1.8 0 3.6.1 5.5.4 2.8.5 2.8.9 2.8 1.2 0 1-5.8 1.9-8.2 2l-2.3-.1.4.4a15 15 0 012 3.3c1 2 .7 2.3.6 2.4a.4.4 0 01-.3.1zm-6.5-8a.4.4 0 01.2 0 .4.4 0 01.3.4c0 .3.1 1.8 1.6 3.5a14.1 14.1 0 003.8 3 14 14 0 00-2.4-4.1 8.6 8.6 0 00-1.4-1.4.4.4 0 010-.7.4.4 0 01.3 0 16 16 0 003.6.2 27.9 27.9 0 006.7-1 27.7 27.7 0 00-6.7-.7l-2.3.1a.4.4 0 01-.4-.2.4.4 0 01.2-.6 22.8 22.8 0 002.6-1.7A37.5 37.5 0 0023 9.2a37 37 0 00-6.7 4 22.8 22.8 0 00-2.4 2 .4.4 0 01-.7-.6 30.8 30.8 0 001.7-3.8 49.4 49.4 0 002.4-9 51.3 51.3 0 00-4 8.3 31.7 31.7 0 00-1.3 4.1.5.5 0 01-.4.4.4.4 0 01-.4-.5 23.3 23.3 0 00-.5-3 37 37 0 00-2.5-7.4 37.2 37.2 0 00.8 7.8l.8 3a.4.4 0 01-.7.5 16.4 16.4 0 00-1.6-1.7 27.7 27.7 0 00-5.6-3.8 27.6 27.6 0 004.4 5.2 16.2 16.2 0 003 2.1.4.4 0 01.1.5.4.4 0 01-.4.4 8 8 0 00-2 0 14 14 0 00-4.5 1.5c1.6.4 3.2.5 4.8.3 2.3-.3 3.4-1.3 3.6-1.6a.5.5 0 01.3-.2zm18 21a1.2 1.2 0 01-.9-.3c-.4-.5.4-2.5 1.3-3.9-3.6-.2-7.4-2-8-2.7a.6.6 0 01-.2-.5c0-.8 3-1.7 5.5-2.2-2.5-2.3-5.1-6-4.5-6.8.4-.6 3.9 0 7 1.5-1.1-4-1.6-9-.7-9.5 1-.4 4.4 3.5 6.4 7 1.1-3.2 3-6.1 3.8-6 1 0 1.8 4.6 1.8 8 2-1.5 4.7-3 5.4-2.5a.6.6 0 01.2.5c0 1-1.3 4.8-3.7 7.7 1.7.3 3.7 1 3.8 1.7 0 1.2-3.8 3.1-5.7 3.4a5.6 5.6 0 01-4-1 5.5 5.5 0 01-2 3.5c-1.2 1-4 2-5.5 2zm-.1-1a9.3 9.3 0 005-1.7 4.3 4.3 0 001.8-3.8.4.4 0 01.2-.5.4.4 0 01.6.2 4.3 4.3 0 004 1.3 9.2 9.2 0 004.7-2.4 9.5 9.5 0 00-3.7-1 .4.4 0 01-.2-.8l.3-.4a17.3 17.3 0 003.6-7 16.7 16.7 0 00-4.9 3 .4.4 0 01-.5 0 .5.5 0 01-.2-.4 19.5 19.5 0 00-1-7.9 18.8 18.8 0 00-3.2 6.3.4.4 0 01-.4.3.4.4 0 01-.4-.2 24.3 24.3 0 00-5.6-7.4 24.1 24.1 0 001.4 9.2.4.4 0 01-.6.5 18.8 18.8 0 00-6.8-2 19.5 19.5 0 005 6 .4.4 0 01.1.5.4.4 0 01-.3.4 16.8 16.8 0 00-5.5 1.5 17.4 17.4 0 007.5 2.2h.5a.5.5 0 01.4.3.4.4 0 010 .5 9.5 9.5 0 00-1.8 3.4z" fill="#004739"></path></svg>
                                    <Card.Body>
                                        <Card.Title>Hybrids</Card.Title>
                                        <Card.Text>
                                            Hybrids are mixtures of both indica and sativa, to combine the effects. Hybrids
                                            can be either indica dominant or sativa-dominant. Popular strains include Gorilla Glue,
                                            or Wedding Cake
                                        </Card.Text>
                                        <Button variant="dark">Hybrids</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default StrainsView;
