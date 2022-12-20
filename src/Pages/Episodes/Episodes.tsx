import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EpisodesFilter from '../../Components/episodesFilter';
import EpisodeSectionContainer from '../../Components/episodeSectionContainer';


const Episodes = () => {
    return(
        <>
            <Container>
                <Row className="justify-content-sm-left">
                    <Col sm={12}>
                        <EpisodesFilter></EpisodesFilter>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <EpisodeSectionContainer></EpisodeSectionContainer>
                    </Col>
                </Row>
            </Container>
        </>
    );

}
export default Episodes;
