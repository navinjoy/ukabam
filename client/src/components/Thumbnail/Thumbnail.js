import React from "react";
import "./Thumbnail.css"
const Thumbnail = props => (
  <div className="thumbnail">
    <img src={props.src} alt={props.src}/>
    <div className="caption">
        <h3>{props.imgcaption}</h3>
    </div>
    {props.children}
  </div>
);

export default Thumbnail;
