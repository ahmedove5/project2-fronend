import React from 'react'


 function CardData(props) {
  return (
    <div className="col-md-4 col-sm border">
     
         <img src={props.info.Image} width="100%" />
  <div class="card-body">
    <h5 class="card-title">{props.info.name}</h5>
    <h6 class="card-subtitle text-muted">{props.info.position}</h6>
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
    </div>
)
}

export default CardData;

