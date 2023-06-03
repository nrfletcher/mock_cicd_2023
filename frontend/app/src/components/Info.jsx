import DropdownMakes from './DropdownMakes';
import DropdownModels from './DropdownModels';
import React from 'react'
import CarInfo from './CarInfo';
import { useState } from 'react';
import axios from "axios";

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

const Info = () => {

    const [make, setMake] = useState('Make');
    const [model, setModel] = useState('Model');
    const [carMake, setCarMake] = useState(null);
    const [carModel, setCarModel] = useState(null);
    const [carHorsePower, setCarHorsePower] = useState(null);
    const [carMSRP, setCarMSRP] = useState(null);

    function makeClickHandler(make) {
        setMake(current => make);
        setModel(current => 'Model');
        setCarMake(current => '');
        setCarModel(current => '');
        setCarHorsePower(current => '');
        setCarMSRP(current => '');
    }

    function modelClickHandler(model, make, hp, ms) {
        ms = '$' + ms;
        setModel(current => model);
        setCarMake(current => make);
        setCarModel(current => model);
        setCarHorsePower(current => hp);
        setCarMSRP(current => ms);
    }

    function infoClickHandler(make, model, horsePower, msrp) {
        setCarMake(current => make);
        setCarModel(current => model);
        setCarHorsePower(current => horsePower);
        setCarMSRP(current => msrp);
    }

    return (
    <div>
        <ul className='nav'>
            <li>
            <div className="container-fluid">
                <DropdownMakes type={make} handleClick={makeClickHandler}/>
            </div> 
            </li>
            <li>
            <div className="container-fluid">
                <DropdownModels type={model} handleClick={modelClickHandler} carMake={make}/>
            </div> 
            </li>
            <li>
            <div className="container-fluid">
                <CarInfo handleClick={infoClickHandler} make={carMake} model={carModel} horsePower={carHorsePower} msrp={carMSRP}/>
            </div> 
            </li>
        </ul>
    </div>
    )
}

export default Info;