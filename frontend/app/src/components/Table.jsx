import '../resources/table.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

async function getAllCars() {
    let result = await axios.get("http://localhost:8080/carapp/cars");
    let items = Array.from(result.data);
    return items;
}

async function modifyCar(url, data) {
    axios.put(url, data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

async function removeCar(url) {
    axios.delete(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
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

    const removeItem = (carId) => {
        removeCar(`http://localhost:8080/carapp/cars/${carId}`);
        try {
            setCars(carDefs.filter((car) => car.id !== carId));
        } catch {
            console.error('Trouble deleting');
        }
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
                    {carDefs.map(car => (
                        <TableRow
                            key={car.id}
                            car={car}
                            removeItem={removeItem}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const TableRow = ({ car, removeItem }) => {
    const handleDelete = () => {
        removeItem(car.id);
    };

    return (
        <tr style={{ margin: '5px'}}>
            <td style={{ padding: '25px' }}>{car.id}</td>
            <td style={{ padding: '45px' }}>{car.carMake}</td>
            <td style={{ padding: '45px' }}>{car.carModel}</td>
            <td style={{ padding: '45px' }}>{car.horsePower}</td>
            <td style={{ padding: '45px' }}>{car.msrp}</td>
            <td>
                <button onClick={handleDelete} className='btn' style={{marginRight: '15px'}}>Delete</button>
                <button onClick={handleDelete} className='btn'>Modify</button>
            </td>
        </tr>
    );
};

export default Table;