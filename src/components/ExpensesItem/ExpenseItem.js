import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md'

import './ExpensesItem.css'
const ExpenseItem = ({expense : { id, charge, amount}, clearItem, editItem}) => {
    return (
        <li className='item'>
            <div className="info">
                <span className='expense'> {charge}</span>
                <span className='amount'> ${amount} </span>
            </div>
            <div>
                <button className='edit-btn' onClick={() => editItem(id)} aria-label='edit button'>
                    <MdEdit/>
                </button>
                <button className='clear-btn'
                        onClick={ () => clearItem(id)}
                        aria-label='delete button'>
                    <MdDelete/>
                </button>
            </div>
            
        </li>
    );
};

export default ExpenseItem;