import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { allocations } = useContext(AppContext);
    const totalallocations = allocations.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining: £{totalallocations}</span>
        </div>
    );
};

export default Remaining;
