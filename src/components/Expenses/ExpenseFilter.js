import react from "react";
import './ExpenseFilter.css'
const ExpenseFilter = (props) => {

    // const [selectedDate, setSelectedDate] = useState('');
    const onChangeHandler = (event)=>{
        const currentDate = event.target.value;
        
        props.onChangeFilter(currentDate)
    }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
