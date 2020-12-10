import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  // const amounts = transactions.map(transaction => transaction.amount)
  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

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

const get_balance =()=>{
const exp = get_expense()
const inc = get_income()
return (inc + exp)
}

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{get_balance()}</h1>
    </div>
  )
}
