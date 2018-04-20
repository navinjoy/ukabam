import React from "react";
import "./Profilepic.css"
const Profilepic = props => (
  <div className="thumbnail" style={{"height":"400px"}}>
    <img src={props.src} alt={props.src} id="pic" style={{"border-radius":"30%", "width":"200px", "height":"200px"}}/>
    <div class="caption">
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
        <p>{props.description}</p>
    </div>
    {props.children}
  </div>
);

export default Profilepic;
