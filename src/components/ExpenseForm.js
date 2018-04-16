import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment();

export default class ExpenseForm extends React.Component{
  constructor(props){
      super(props);
      this.state={
        description:props.expense ? props.expense.description : '',
        note:props.expense ? props.expense.note : '',
        amount:props.expense ? props.expense.amount.toString() : '',
        createdAt:props.expense ? moment(props.expense.createdAt):moment(),
        focused:false,
        error:'',
        buttonText:props.expense ? 'Update Expense':'Add Expense'
      }
      this.onDescriptionChange = this.onDescriptionChange.bind(this);
      this.onAmountChange = this.onAmountChange.bind(this);
      this.onNoteChange = this.onNoteChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);

  }

  onDateChange(createdAt){
    if(createdAt){
     this.setState(()=>({createdAt}));
    }
  }

  onDescriptionChange(event){
    const description = event.target.value;
    this.setState(()=>{
      return({description})
    })
  }

    onNoteChange(event){
    const note = event.target.value;
    this.setState(()=>{
      return({note})
    })
  }

  onAmountChange(event){
    const amount = event.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)){
      this.setState(()=>{
        return({amount})
      })

    }
  }

  onFocusChange({focused}){
    this.setState(()=>({calenderFocused:focused}));

  }

  onSubmit(event){
    event.preventDefault();
    
    if(!this.state.description||!this.state.amount){
      this.setState(()=>({error:'Please enter amount and description'}));
      }else{
        this.setState(()=>({error:''}));

        this.props.onSubmit({
          description:this.state.description,
          amount:parseFloat(this.state.amount,10),
          createdAt:this.state.createdAt.valueOf(),
          note:this.state.note
        });
      }

  }

  render(){
      return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="description" autoFocus value={this.state.description}
        onChange={this.onDescriptionChange}/>
        <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange}/>
        <SingleDatePicker 
        date={this.state.createdAt}
        onDateChange={this.onDateChange}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        />
        <textarea placeholder="Add note for expense (optional).." value={this.state.note} onChange={this.onNoteChange}/>
        <button>{this.state.buttonText}</button>
        </form>
        </div>
    )
  }

}