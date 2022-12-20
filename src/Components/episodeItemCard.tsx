import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EpisodeItemProps } from '../Utils/EpisodesInterfaces';

const EpisodeItem = (props: EpisodeItemProps) => {
    const {title, season, episode, air_date} = props.Episode;
  return (
    <>
      {[
        'Success',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Title>{variant} {season} </Card.Title>
            <Card.Text>
              {episode}
            </Card.Text>
            <Card.Text>
              {air_date}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default EpisodeItem;