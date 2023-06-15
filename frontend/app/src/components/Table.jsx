import React, { useState } from 'react';
import '../resources/table.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

async function getAllCars() {
    let result = await axios.get("http://localhost:8080/cicd/cars");
    let items = Array.from(result.data);
    return items;
}

const Table = () => {
    const [cars, setItems] = useState([
        { id: 1, make: 'BMW', model: '335i', horsePower: '125', msrp: '55000'},
        { id: 2, make: 'BMW', model: '335i', horsePower: '125', msrp: '55000'},
        { id: 3, make: 'BMW', model: '335i', horsePower: '125', msrp: '55000'}
    ]);

    let [carDefs, setCars] = useState([]);

    useEffect(() => {
        getAllCars().then(carDefs => setCars(carDefs));
    }, []);

    const removeItem = (itemId) => {
        setItems(cars.filter(item => item.id !== itemId));
    };

    return (
        <div>
            <button className='btn'>Create New Item</button>
            <table>
                <thead>
                    <tr style={{ marginBottom: '10px'}}>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Horsepower</th>
                        <th>MSRP</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(item => (
                        <TableRow
                            key={item.id}
                            item={item}
                            removeItem={removeItem}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TableRow = ({ item, removeItem }) => {
    const handleDelete = () => {
        removeItem(item.id);
    };

    return (
        <tr style={{ margin: '5px'}}>
            <td style={{ padding: '25px' }}>{item.id}</td>
            <td style={{ padding: '45px' }}>{item.make}</td>
            <td style={{ padding: '45px' }}>{item.model}</td>
            <td style={{ padding: '45px' }}>{item.horsePower}</td>
            <td style={{ padding: '45px' }}>{item.msrp}</td>
            <td>
                <button onClick={handleDelete} className='btn' style={{marginRight: '15px'}}>Delete</button>
                <button onClick={handleDelete} className='btn'>Modify</button>
            </td>
        </tr>
    );
};

export default Table;