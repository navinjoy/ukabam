import React from "react";

const Card = props => (
  <div className="card" >
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={()=>props.imgClicked(props.id)}/>
    </div>
  </div>
);

export default Card;
