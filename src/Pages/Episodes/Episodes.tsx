import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EpisodesFilter from '../../Components/episodesFilter';


const Episodes = () => {
    return(
        <>
            <div>
                <EpisodesFilter></EpisodesFilter>
                <h1>This is the Episodes Page</h1>
            </div>
        </>
    );

}
export default Episodes;
