import React, { useContext } from 'react';
import AllocItem from './AllocItem';
import { AppContext } from '../context/AppContext';

const AllocationList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <AllocItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice} />
            ))}
            </tbody>
        </table>
    );
};

export default AllocationList;