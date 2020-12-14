import React from "react";
import { Card, Button, CardTitle, CardText, Col, Row } from "reactstrap";

export const NotificationCard = () => {
  return (
    <Card style={{ margin: 5 }} body>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Row>
        <Button style={{ margin: 5 }}>Okundu olarak isaretle</Button>
      </Row>
    </Card>
  );
};
