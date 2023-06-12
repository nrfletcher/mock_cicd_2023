import React, { useState } from 'react';
import '../resources/table.css';

const Table = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1'},
        { id: 2, name: 'Item 2'},
        { id: 3, name: 'Item 3'}
    ]);

    const removeItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));
    };

    return (
        <div>
            <table>
                <thead>
                    <tr style={{ marginBottom: '10px'}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
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
            <td style={{ padding: '5px'}}>{item.id}</td>
            <td style={{ padding: '15px'}}>{item.name}</td>
            <td>
                <button onClick={handleDelete} className='btn'>Delete</button>
            </td>
        </tr>
    );
};

export default Table;