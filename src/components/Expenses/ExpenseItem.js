import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
// import userEvent from "@testing-library/user-event";

const ExpenseItem = (props) => {


   const clickHandler = () => {
   
    console.log(props.title)
   }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <Card className="expense-item__price">${props.amount}</Card>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    
  );
}

export default ExpenseItem;
