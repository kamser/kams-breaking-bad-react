import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CharacterSection from '../../Components/characterSection';
import DeathsSection from '../../Components/deathsSection';

const temporalStyles = {
    borderLeft: '6px solid black',
    height: '200px',
    position: 'absolute',
    left: '50%'
}

const Home = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col sm={7}>
                        <CharacterSection/>
                    </Col>
                    <Col sm={1}>
                        line
                    </Col>
                    <Col sm={3}>
                        <DeathsSection/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;