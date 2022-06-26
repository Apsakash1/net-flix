// import { useState, useEffect } from "react";
import "./row.css";

export default function Rows(props) {

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row-image-container">
        {props.list.map((movie) => (
          <img
            className="row-images"
            src={movie}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}