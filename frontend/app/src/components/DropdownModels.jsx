import axios from "axios";
import React, {useState, useEffect} from 'react';

async function getAllCars() {
    let result = await axios.get("http://localhost:8080/carapp/cars");
    return result.data;
}

async function getCarById(id) {
    let result = await axios.get("http://localhost:8080/carapp/cars/" + id);
    console.log(result.data);
    return result.data;
}

async function getCarsByMake(make) {
    let result = await axios.get("http://localhost:8080/carapp/cars/make/" + make);
    return result.data;
}

const DropdownModels = (props) => {

    let carType = props.carMake;
    let [carsByMake, setCarsByMake] = useState([]);
    let [cars, setCars] = useState([]);

    // unsorted here
    useEffect(() => {
        getAllCars().then(cars => setCars(cars));
        getCarsByMake().then(cars =>  setCarsByMake(cars));
    }, [])
    
    let uniqueMakes = [];
    let uniqueCars = [];

    // sorted here
    for(const car of cars) {
        if(uniqueMakes.includes(car.carModel)) {
            continue;
        } else {
            uniqueMakes.push(car.carModel);
            uniqueCars.push(car);
        }
    }

    let carModelsByMake = [];
    for(const car of cars) {
        if(car.carMake === carType) {
            carModelsByMake.push(car);
        } else {
            continue;
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
                carModelsByMake.map((car, i) => {
                    return <li>
                        <a className="dropdown-item" 
                            onClick={(e) => props.handleClick(car.carModel, car.carMake, car.horsePower, car.msrp)} key={i}>{car.carModel}</a>
                    </li>
                })
            }
            </ul>
        </div>
      </div>
    )
}

export default DropdownModels;
