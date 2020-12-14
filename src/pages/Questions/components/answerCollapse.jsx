import React from "react";
import { CardTitle, CardBody, Card, Col } from "reactstrap";
import moment from "moment";

const AnswerCollapse = ({
  title,
  description,
  createdDate,
  id,
  entityType,
  receiverImg,
  receiver
}) => {
  return (
    <Card
      style={{
        margin: 5,
        backgroundColor: entityType === 30 ? "aliceblue" : "white"
      }}
    >
      <CardBody>
        <CardTitle>
          <div class="media">
            {entityType === 10 || entityType === 20 ? (
              <div style={{ display: "flex" }}>
                <img
                  style={{ height: "50px" }}
                  src={receiverImg}
                  class="align-self-start mr-3"
                  alt="..."
                />
                <Col>
                  <p style={{ marginBottom: 0 }}> {receiver.name} </p>
                  <small> {receiver.profession} </small>
                </Col>
              </div>
            ) : (
              <span class="badge badge-light">Siz</span>
            )}
          </div>
        </CardTitle>
        <CardTitle>
          {title || (
            <span class="badge badge-light">
              {moment(createdDate).format("LLL")}
            </span>
          )}
        </CardTitle>
        {description}
      </CardBody>
    </Card>
  );
};

export default AnswerCollapse;
