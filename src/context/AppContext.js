import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_allocations = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.allocations.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = expense.quantity + action.payload.quantity;
                    updatedqty = true;
                }
                new_allocations.push(expense);
                return true;
            })
            state.allocations = new_allocations;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'RED_QUANTITY':
                state.allocations.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.quantity = expense.quantity - action.payload.quantity;
                    }
                    expense.quantity = expense.quantity < 0 ? 0: expense.quantity;
                    new_allocations.push(expense);
                    return true;
                })
                state.allocations = new_allocations;
                action.type = "DONE";
                return {
                    ...state,
                };
        case 'DELETE_ITEM':
            state.allocations.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = 0;
                }
                new_allocations.push(expense);
                return true;
            })
            state.allocations = new_allocations;
            action.type = "DONE";
            return {
                ...state,
            };
    case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    allocations: [
        { id: "Marketing", name: 'Marketing', allocBudget: 0 },
        { id: "Finance", name: 'Finance', allocBudget: 0 },
        { id: "Sales", name: 'Sales', allocBudget: 0 },
        { id: "Human Resource", name: 'Human Resource', allocBudget: 0 },
        { id: "IT", name: 'IT', allocBudget: 0 },
    ]
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalallocations = state.allocations.reduce((total, item) => {
        return (total = total + (item.unitprice*item.quantity));
    }, 0);
state.CartValue = totalallocations;

    return (
        <AppContext.Provider
            value={{
                allocations: state.allocations,
                CartValue: state.CartValue,
                dispatch,
                Location: state.Location
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};