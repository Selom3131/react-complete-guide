import react from "react";
import './NewExpenseScreen.css';


const NewExpenseScreen = () => {

    const onSubmitHandler = () =>{

    };

    return(<div className="new-expense">
        <button type='submit' onClick={onSubmitHandler}>Add new expense</button>
    </div>);

}


export default NewExpenseScreen;