import React from 'react'

function CarInfo(props) {
  return (
    <div>
        <ul class="list-group">
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>Make: <span style={{textAlign: "right", color: "blue"}}>{props.make}</span></li>
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>Model: <span style={{textAlign: "right", color: "red"}}>{props.model}</span></li>
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>Horsepower: <span style={{textAlign: "right", color: "blue"}}>{props.horsePower}</span></li>
            <li class="list-group-item" 
                style={{width: 300, textAlign: "left"}}>MSRP: <span style={{textAlign: "right", color: "red"}}>{props.msrp}</span></li>
        </ul>
    </div>
  )
}

export default CarInfo;