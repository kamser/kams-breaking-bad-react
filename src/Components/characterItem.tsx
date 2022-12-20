import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CharacterItemProps } from '../Utils/HomeInterfaces';

const CharacterItem = (props: CharacterItemProps) => {
    const {name, occupation, status, birthday, portrayer} = props.character;
    return(
        <>
            <Card style={{ width: '16rem', marginTop: '2rem' }}>
                <Card.Img variant="top" src={portrayer} height="150rem" />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Card.Title style={{ alignSelf: 'flex-start' }} >{name}</Card.Title>
                    <Card.Text style={{ alignSelf: 'flex-start' }}>
                        {occupation}
                    </Card.Text>
                    <Card.Text style={{ alignSelf: 'flex-start' }}>
                        {status}
                    </Card.Text>
                    <Card.Text style={{ alignSelf: 'flex-start' }}>
                        {birthday}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CharacterItem;