import React, { useState, useEffect } from 'react';
import ExpenseList from "../ExpensesList/ExpenseList";
import ExpenseForm from "../ExpensesForm/ExpenseForm";
import Alert from '../Alert/Alert';
import uuid from 'uuid/v4'
import './App.css'

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.expenses) : [];
const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [alert, setAlert] = useState({show: false});
    const [edit, setEdit] = useState(false);

    useEffect(() =>localStorage.setItem("expenses", JSON.stringify(expenses))
    ,[expenses])

    const handleCharge = e => {
        setCharge(e.target.value);
    };
    const handleAmount = e => {
        setAmount(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (charge && amount > 0) {
            setExpenses([...expenses, {id: uuid(), charge, amount}])
            handleAlert({type: 'success', text: 'item added'});
            setCharge('');
            setAmount('');
            setEdit(false)
        } else {
            handleAlert({type: 'danger', text: 'charge can not be empty and amount value has to be bigger than zero'});
        }
    };
    const handleAlert = ({type, text}) => {
        setAlert({show: true, type, text});
        setTimeout(() => {
            setAlert({show: false})
        }, 3000)
    };
    const clearExpensesList = () => {
        setExpenses([]);
        handleAlert({type: 'danger', text: 'Expenses list cleaned'});

    };
    const clearItem = (id) => {
        setExpenses(expenses.filter( item => item.id !== id));
        handleAlert({type: 'danger', text: 'item deleted'});
    };
    const editItem = (id) => {
        const choosenItem = expenses.find(item => item.id === id);
        setCharge(choosenItem.charge);
        setAmount(choosenItem.amount);
        setExpenses(expenses.filter( item => item.id !== id))
        setEdit(true)
    };


    return (
      <>
        {alert.show && <Alert type={alert.type} text={alert.text}/>}
        <h1>budget calculator</h1>
        <main className='App'>
            <ExpenseForm charge={charge}
                         amount={amount}
                         handleCharge={handleCharge}
                         handleAmount={handleAmount}
                         handleSubmit={handleSubmit}
                         edit={edit}/>

            <ExpenseList expenses={expenses}
                         clearExpensesList={clearExpensesList}
                         clearItem={clearItem}
                         editItem={editItem}/>
        </main>
        <h1>
            total spending :
            <span className='total'>
            $ {expenses.reduce((acc, curr) => {
                return (acc += +curr.amount);
                }, 0)}
            </span>
        </h1>

      </>
    );
};

export default App;