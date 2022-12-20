import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Character } from '../Utils/HomeInterfaces';
import CharacterItem from './characterItem';
import SortByButtonGroup from './sortByButtonGruop';
import MoreCharactersButton from './moreCharacterButton';

const testCharacterData: Array<Character> = [
    {
        name: "title1",
        occupation: "season1",
        status: "episode1",
        birthday: "air_date1",
        portrayer: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
    },
    {
        name: "title1",
        occupation: "season1",
        status: "episode1",
        birthday: "air_date1",
        portrayer: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
    },
    {
        name: "title1",
        occupation: "season1",
        status: "episode1",
        birthday: "air_date1",
        portrayer: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
    },
    {
        name: "title1",
        occupation: "season1",
        status: "episode1",
        birthday: "air_date1",
        portrayer: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
    },
    {
        name: "title1",
        occupation: "season1",
        status: "episode1",
        birthday: "air_date1",
        portrayer: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
    },
    {
        name: "name 6",
        occupation: "season1",
        status: "episode1",
        birthday: "air_date1",
        portrayer: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
    }
]

const CharacterSection = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <SortByButtonGroup/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Container>
                            <Row>
                                <Col sm={4}>
                                    <CharacterItem character={testCharacterData[0]}/>
                                </Col>
                                <Col sm={4}>
                                    <CharacterItem character={testCharacterData[1]}/>
                                </Col>
                                <Col sm={4}>
                                    <CharacterItem character={testCharacterData[2]}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <CharacterItem character={testCharacterData[3]}/>
                                </Col>
                                <Col sm={4}>
                                    <CharacterItem character={testCharacterData[4]}/>
                                </Col>
                                <Col sm={4}>
                                    <CharacterItem character={testCharacterData[5]}/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <MoreCharactersButton/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CharacterSection;