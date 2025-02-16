import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeAlloc = (props) => {
    const { dispatch, allocations, Budget, Location } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');


    const submitEvent = () => {

        const item = {
            name: name,
            quantity: parseInt(quantity),
        };

        if (action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
            const totalallocations = allocations.reduce((total, item) => {return (total += item.allocBudget);}, 0);
            const newTotalAllocations = totalallocations + item.quantity
            if (newTotalAllocations <= Budget) 
            {
                dispatch({
                    type: 'ADD_QUANTITY',
                    payload: item,
                });
            } else {
                window.alert('The value cannot exceed remaining funds ' + String(Budget-totalallocations) + '.');
            }
            
        }
    };

    return (
        <div>
            <div className='row'>

                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="Marketing"> Marketing</option>
                        <option value="Finance" name="Finance">Finance</option>
                        <option value="Sales" name="Sales">Sales</option>
                        <option value="Human Resource" name="Human Resource">Human Resource</option>
                        <option value="IT" name="IT">IT</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px' }}>{Location}</span>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{ size: 10 }}
                        onChange={(event) => setQuantity(event.target.value)}>
                    </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ChangeAlloc;