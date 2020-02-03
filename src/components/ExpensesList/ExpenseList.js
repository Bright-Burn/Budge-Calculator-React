import React from 'react';
import ExpenseItem from "../ExpensesItem/ExpenseItem";
import { MdDelete } from 'react-icons/md'

import './ExpensesList.css'

const ExpenseList = ({expenses, clearExpensesList, clearItem, editItem}) => {
    return (
        <>
            <ul className='list'>
                {expenses && expenses.map((expense) => {
                    return <ExpenseItem key={expense.id}
                                        expense={expense}
                                        clearItem={clearItem}
                                        editItem={editItem}/>
                } )}
            </ul>
            {<button className='btn' onClick={clearExpensesList}>Clear expenses
            <MdDelete className='btn-icon' /></button>
                }

        </>
    );
};

export default ExpenseList;