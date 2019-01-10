import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ServerCard = (props) => {
  const data = props.data;
  return (
      <div>
        <Card>
          <CardImg top width="100px" src="https://vignette.wikia.nocookie.net/logopedia/images/1/16/300px-DC_Comics_logo.svg.png/revision/latest?cb=20110127205851" />
          <CardBody>
            <CardTitle>{ data.name }</CardTitle>
            <CardSubtitle>{ data.map }</CardSubtitle>
            <CardText>{ data.descr }</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
  );
};

export default ServerCard;