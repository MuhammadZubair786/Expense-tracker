import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const itemClass = transaction.amount < 0 ? "minus" : "plus"
  const sign = transaction.amount < 0 ? "-" : "+"

  return (
    <li className={itemClass}>
      {transaction.text}{''}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  )
}
