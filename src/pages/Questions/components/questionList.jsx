import React from "react";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const QuestionList = (props) => {
  const questions = props.questions.reverse();
  return questions.map((item) => {
    return (
      <ListGroup>
        <ListGroupItem style={{ margin: "10px" }}>
          <ListGroupItemHeading>
            {" "}
            <Link
              to={`/sorularim/${item.title.replace(/ /g, "-").toLowerCase()}/${
                item.id
              }`}
            >
              {item.title}
            </Link>{" "}
          </ListGroupItemHeading>
          <ListGroupItemText>{item.description}</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  });
};

export default QuestionList;
