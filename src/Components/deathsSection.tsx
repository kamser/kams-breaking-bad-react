import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DeathsSection = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        TOTAL DEATHS: NUMBER
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={12}>
                        Deaths
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                item 1
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                item 2
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                itme 3
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default DeathsSection;