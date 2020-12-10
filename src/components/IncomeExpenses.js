import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  

  const get_income = ()=>{
    let income = 0
    for(let i=0;i<transactions.length;i++){
        if(transactions[i].amount>0){

   income = income+transactions[i].amount
        }
    }
   return income
}

const get_expense = ()=>{
  let exp = 0
  for(let i=0;i<transactions.length;i++){
      if(transactions[i].amount<0){

 exp = exp+transactions[i].amount
      }
  }
 return exp
}

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{get_income()}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{get_expense()}</p>
      </div>
    </div>
  )
}
