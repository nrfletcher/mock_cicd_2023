import React, {useState, useEffect} from 'react';
import axios from "axios";

async function getAllCars() {
    let result = await axios.get("http://localhost:8080/carapp/cars");
    let items = Array.from(result.data);
    return items;
}

async function getCarById(id) {
    let result = await axios.get("http://localhost:8080/carapp/cars/" + id);
    console.log(result.data);
    return result.data;
}

async function getCarsByMake(make) {
    let result = await axios.get("http://localhost:8080/carapp/cars/make/" + make);
    console.log(result.data);
    return result.data;
}

function testAPI() {
    console.log('via API');
}

const DropdownMakes = (props) => { 

    let [cars, setCars] = useState([]);

    // unsorted here
    useEffect(() => {
        getAllCars().then(cars => setCars(cars));
    }, [])
    
    let uniqueMakes = [];
    let uniqueCars = [];

    // sorted here
    for(const car of cars) {
        if(uniqueMakes.includes(car.carMake)) {
            continue;
        } else {
            uniqueMakes.push(car.carMake);
            uniqueCars.push(car);
        }
    }

    return (
      <div>
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle bg-primary" 
                href="#" role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                {props.type}
            </a>
            <ul class="dropdown-menu">
            {   
                uniqueCars.map((car, i) => {
                    return <li>
                        <a className="dropdown-item" 
                            onClick={(e) => props.handleClick(car.carMake)} key={i}>{car.carMake}</a>
                    </li>
                })
            }
            </ul>
        </div>
      </div>
    )
}

export default DropdownMakes;