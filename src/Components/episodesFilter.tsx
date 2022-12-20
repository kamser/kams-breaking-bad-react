import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { seasonData } from '../Assets/episodesData';

function EpisodesFilter() {

    const [selectedSeason, setSelectedSeason] = useState<string | null>(seasonData.SeasonOne);
    
    const changeSeason = (newSelectedSeason: string | null) => {
        setSelectedSeason(newSelectedSeason);
    }
    
    return (
        <Dropdown onSelect={(eventKey: string | null) => changeSeason(eventKey)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedSeason}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey={seasonData.SeasonOne}>{seasonData.SeasonOne}</Dropdown.Item>
                <Dropdown.Item eventKey={seasonData.SeasonTwo}>{seasonData.SeasonTwo}</Dropdown.Item>
                <Dropdown.Item eventKey={seasonData.SeasonThree}>{seasonData.SeasonThree}</Dropdown.Item>
                <Dropdown.Item eventKey={seasonData.SeasonFour}>{seasonData.SeasonFour}</Dropdown.Item>
                <Dropdown.Item eventKey={seasonData.SeasonFive}>{seasonData.SeasonFive}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}



export default EpisodesFilter;