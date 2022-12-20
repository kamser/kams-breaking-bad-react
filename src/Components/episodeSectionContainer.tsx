import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Episode } from '../Utils/EpisodesInterfaces';


const testEpisodesDate: Array<Episode> = [
    {
        title: "title1",
        season: "season1",
        episode: "episode1",
        air_date: "air_date1"
    },
    {
        title: "title1",
        season: "season1",
        episode: "episode1",
        air_date: "air_date1"
    },
    {
        title: "title1",
        season: "season1",
        episode: "episode1",
        air_date: "air_date1"
    },
    {
        title: "title1",
        season: "season1",
        episode: "episode1",
        air_date: "air_date1"
    },
    {
        title: "title1",
        season: "season1",
        episode: "episode1",
        air_date: "air_date1"
    },
    {
        title: "title1",
        season: "season1",
        episode: "episode1",
        air_date: "air_date1"
    },
]


const EpisodeSectionContainer = () => {
    return(
        <>
           <Container>
                <Row>
                    <Col sm>{testEpisodesDate[0].title}</Col>
                    <Col sm>{testEpisodesDate[2].air_date}</Col>
                    <Col sm>{testEpisodesDate[3].season}</Col>
                </Row>
                <Row>
                    <Col sm>{testEpisodesDate[4].title}</Col>
                    <Col sm>{testEpisodesDate[5].air_date}</Col>
                    <Col sm>{testEpisodesDate[1].season}</Col>
                </Row>
            </Container>
        </>
    );

}
export default EpisodeSectionContainer;