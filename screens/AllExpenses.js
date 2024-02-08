
import { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutut/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)
  return <ExpensesOutput expensesPeriod='Total' expenses={expensesCtx.expenses} fallbackText='No registered expenses found'/>
}

export default AllExpenses