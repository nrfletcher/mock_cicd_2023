import '../resources/table.css';
import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';

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

async function addCar(url, data) {
    axios.post(url, data)
    .then(function (response) {
    console.log(response);
    return response;
    })
    .catch(function (error) {
    console.log(error);
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

    const addNewItem = (data) => {
        addCar("http://localhost:8080/carapp/cars", data)
        .then(() => {
            getAllCars().then(carDefs => setCars(carDefs));
        })
        .catch((error) => {
        console.error("Error adding new item:", error);
        });
    };

    const modifyItem = () => {
        // Still to be implemented
    };

    return (
        <div className='forms'>
            <Form addNewItem={addNewItem}></Form>
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

const Form = ( { addNewItem }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const make = formData.get('make');
      const model = formData.get('model');
      const horsepower = formData.get('hp');
      const msrp = formData.get('msrp');
      
      handleFormSubmission(make, model, horsepower, msrp);
    };
  
    const handleFormSubmission = (make, model, horsepower, msrp) => {
        const newCar = {
            carMake: make,
            carModel: model,
            horsePower: horsepower,
            msrp: msrp
        };
        addNewItem(newCar);
    };
  
    return (
      <form onSubmit={handleSubmit} className='forms'>
        <label>
          Make:
          <input type="text" name="make" />
        </label>
  
        <label>
          Model:
          <input type="text" name="model" />
        </label>
  
        <label>
          Horsepower:
          <input type="text" name="hp" />
        </label>

        <label>
          MSRP:
          <input type="text" name="msrp" />
        </label>
  
        <button type="submit">Submit</button>
      </form>
    );
  };

export default Table;