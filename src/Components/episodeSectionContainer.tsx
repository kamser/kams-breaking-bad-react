import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Episode } from '../Utils/EpisodesInterfaces';
import EpisodeItem from './episodeItemCard';


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
];


const EpisodeSectionContainer = () => {
    return(
        <>
           <Container>
                <Row>
                    <Col sm><EpisodeItem Episode={testEpisodesDate[0]}/></Col>
                    <Col sm><EpisodeItem Episode={testEpisodesDate[1]}/></Col>
                    <Col sm><EpisodeItem Episode={testEpisodesDate[2]}/></Col>
                </Row>
                <Row>
                    <Col sm><EpisodeItem Episode={testEpisodesDate[3]}/></Col>
                    <Col sm><EpisodeItem Episode={testEpisodesDate[4]}/></Col>
                    <Col sm><EpisodeItem Episode={testEpisodesDate[5]}/></Col>
                </Row>
            </Container>
        </>
    );

}
export default EpisodeSectionContainer;