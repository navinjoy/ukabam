import React from "react";
import "./Profilepic.css"
const Profilepic = props => (
  <div className="thumbnail">
    <img src={props.src} id="pic" style={{"border-radius":"30%", "width":"200px", "height":"200px"}}/>
    <div class="caption">
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
        {/* <hr></hr> */}
        <p>{props.description}</p>
    </div>
    {props.children}
  </div>
);

/* 
<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="..." alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>
*/

export default Profilepic;
