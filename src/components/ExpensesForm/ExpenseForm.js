import React from 'react';
import { MdSend } from 'react-icons/md';

import './ExpensesForm.css'

const ExpenseForm = ({   charge,
                         amount,
                         handleCharge,
                         handleAmount,
                         handleSubmit,
                         edit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className="from-group from-group--left">
                    <label htmlFor="charge">Charge</label>
                    <input className='form-control'
                           id='charge'
                           name='charge'
                           type="text"
                           placeholder='e.g. rent'
                           value={charge}
                           onChange={handleCharge}/>

                </div>

                <div className="from-group">
                    <label htmlFor="amount">amount</label>
                    <input className='form-control'
                           id='amount'
                           name='amount'
                           type="text"
                           placeholder='e.g. 100'
                           value={amount}
                           onChange={handleAmount}/>
                </div>
            </div>
            <button type='submit'
                    className='btn'>
                {edit ? 'edit' : 'submit'}
                <MdSend className="btn-icon"/>
            </button>
        </form>
    );
};

export default ExpenseForm;