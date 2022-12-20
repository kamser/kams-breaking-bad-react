import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacterItem = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        the Character section
                    </Col>
                    <Col sm={12}>
                        the Death section
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CharacterItem;