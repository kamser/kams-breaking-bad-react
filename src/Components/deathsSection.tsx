import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Death } from '../Utils/HomeInterfaces';
import DeathItem from './deathItem';

const testDeathsData: Array<Death> = [
    {
        cause: "NIPI",
        responsible: "PAPI GAVI",
        lastWords: "FUCK"
    },
    {
        cause: "NIPI",
        responsible: "PAPI GAVI",
        lastWords: "FUCK"
    },
    {
        cause: "NIPI",
        responsible: "PAPI GAVI",
        lastWords: "FUCK"
    },
    {
        cause: "NIPI",
        responsible: "PAPI GAVI",
        lastWords: "FUCK"
    },
    {
        cause: "NIPI",
        responsible: "PAPI GAVI",
        lastWords: "FUCK"
    },
    {
        cause: "NIPI",
        responsible: "PAPI GAVI",
        lastWords: "FUCK"
    }
];

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
                                <DeathItem death={testDeathsData[0]}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <DeathItem death={testDeathsData[1]}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <DeathItem death={testDeathsData[2]}/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default DeathsSection;