import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function MoreCharactersButton() {
  return (
    <div className="d-grid gap-2">
      <Button variant="success" size="lg">
        More Character
      </Button>
    </div>
  );
}

export default MoreCharactersButton;