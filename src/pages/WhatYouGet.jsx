import React, { Component } from "react";

class WhatYouGet extends Component {
  render() {
    const { whatYouGet } = this.props;
    return (
      <div className="bg-light rounded p-4 mt-4 pt-2">
        <ul className="list-unstyled feature-list text-muted mt-4">
          {whatYouGet &&
            whatYouGet.split("|").map(item => {
              return (
                <li>
                  <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2"></i>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default WhatYouGet;
