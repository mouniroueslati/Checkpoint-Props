
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Player = (props) => {
    console.log(props)
  return (
    <div>

     
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.el.image} />
      <Card.Body>
        <Card.Title>{props.el.name}</Card.Title>
        <Card.Text>Age: {props.el.age}</Card.Text>
        <Card.Text>Rating: {props.el.rating}</Card.Text>
        <Card.Text>JerseyNumber: {props.el.jerseyNumber}</Card.Text>
        <Card.Text>Position: {props.el.position}</Card.Text>
        <Card.Text>Team: {props.el.team}</Card.Text>
        <Card.Text>Nationality: {props.el.nationality}</Card.Text>
      </Card.Body>
      </Card>
     </div>
)
}

export default Player