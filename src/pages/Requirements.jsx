import React, { Component } from "react";

class Requirements extends Component {
  render() {
    const { requirements } = this.props;
    return (
      <ul className="list-unstyled">
        {requirements &&
          requirements.split("|").map(item => {
            return (
              <li className="text-muted">
                <i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>
                {item}
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Requirements;
