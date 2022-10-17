import react from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
import NewExpenseScreen from "./NewExpenseScreen"

const NewExpense = (props)=>{

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        
    }

    return(
        <div className="new-expense">
            {/* <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/> */}
            {<NewExpenseScreen/>}
        </div>
    )

}

export default NewExpense