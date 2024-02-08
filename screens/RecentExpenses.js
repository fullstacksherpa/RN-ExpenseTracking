import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutut/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });
  return <ExpensesOutput expensesPeriod="Last 7 days" expenses={recentExpenses} fallbackText='You have no expenses for last 7 days. Well done champ !!!!'/>;
};

export default RecentExpenses;
