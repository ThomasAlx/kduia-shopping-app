import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

const AllocItem = (props) => {
    const {dispatch} = useContext(AppContext);

    const add10 = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_10',
            payload: item,
        });
    };

    const rmv10 = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RMV_10',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td> £{parseInt(props.allocBudget)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={add10}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={rmv10}></FaMinusCircle></td>
        </tr>
    );
};

export default AllocItem;