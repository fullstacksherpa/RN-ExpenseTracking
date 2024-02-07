import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { View, StyleSheet } from 'react-native'
import { GlobalStyles } from "../../constants/styles";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'computer',
        amount: 149.99,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: '1 kg of bananas',
        amount: 9,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'vision pro',
        amount: 4000,
        date: new Date('2022-2-18')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'computer',
        amount: 149.99,
        date: new Date('2022-01-05')
    },
    {
        id: 'e8',
        description: '1 kg of bananas',
        amount: 9,
        date: new Date('2021-12-01')
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e10',
        description: 'vision pro',
        amount: 4000,
        date: new Date('2022-2-18')
    },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES}/>
      <ExpensesList  expenses={DUMMY_EXPENSES}/>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
})

