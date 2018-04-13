import React from "react";
import "./Thumbnail.css"
const Thumbnail = props => (
  <div className="thumbnail">
    <img src={props.src} />
    <div class="caption">
        <h3>{props.imgcaption}</h3>
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

export default Thumbnail;
