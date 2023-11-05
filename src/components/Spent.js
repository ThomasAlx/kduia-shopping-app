import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { allocations, Location } = useContext(AppContext);
    const totalallocations = allocations.reduce((total, item) => {return (total += item.allocBudget);}, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{totalallocations}</span>
        </div>
    );
};

export default Spent;
