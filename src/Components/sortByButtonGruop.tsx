import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SortByButtonGroup() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Name</Button>
      <Button variant="secondary">Birthday</Button>
      <Button variant="secondary">Portrayer</Button>
    </ButtonGroup>
  );
}

export default SortByButtonGroup;