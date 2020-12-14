import React from "react";
import { Link } from "react-router-dom";

export const TenantEducatorCard = ({ img, name, profession, id }) => {
  return (
    <div className="team text-center">
      <div className="position-relative">
        <img
          src={img}
          className="img-fluid d-block rounded-pill mx-auto"
          alt=""
        />
      </div>
      <div className="content pt-3 pb-3">
        <h5 className="mb-0">
          <Link
            to={{
              pathname: `/egitmen/${name.replace(/ /g, "-").toLowerCase()}`,
              state: {
                entityId: id
              }
            }}
            className="name text-dark"
          >
            {name}
          </Link>
        </h5>
        <small className="designation text-muted">{profession}</small>
      </div>
    </div>
  );
};
