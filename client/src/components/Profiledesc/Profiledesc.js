import React from "react";
import "./Profiledesc.css"

const Profiledesc = props => (
  <div className="thumbnail">
    <div className="caption">
        <p style={{"text-align": "justify"}}>{props.desc}</p>
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

export default Profiledesc;
