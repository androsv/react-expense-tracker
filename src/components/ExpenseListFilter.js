import React from 'react';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {connect} from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            focused:null
        }
        this.onDatesChange=this.onDatesChange.bind(this);
        this.onFocusChange=this.onFocusChange.bind(this);
    }

    onDatesChange = ({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange=(focused)=>{
        this.setState(()=>({focused}))
    }

    render(){return(
        <div>
<input type="text" value={this.props.filters.text} onChange={(event)=>{
    this.props.dispatch(setTextFilter(event.target.value));
}}/>
<select value={this.props.filters.sortBy} onChange={(event)=>{
    if(event.target.value=='amount'){
        this.props.dispatch(sortByAmount());
    }else{
        this.props.dispatch(sortByDate());
    }
}}>
<option value="date">Date</option>
<option value="amount">Amount</option>
</select>
<DateRangePicker
startDate={this.props.filters.startDate}
endDate={this.props.filters.endDate}
onDatesChange={this.onDatesChange}
focusedInput={this.state.focused}
onFocusChange={this.onFocusChange}
numberOfMonths={1}
isOutsideRange={()=>false}
showClearDates={true}

/>
</div>
    )}
}

            


const mapStateToProps = (state)=>{
    return{
        filters:state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);