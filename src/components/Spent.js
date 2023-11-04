import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { allocations } = useContext(AppContext);
    const totalallocations = allocations.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalallocations}</span>
        </div>
    );
};

export default Spent;
