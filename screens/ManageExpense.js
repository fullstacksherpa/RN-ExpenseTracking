import { useLayoutEffect } from 'react';
import { Text } from 'react-native'

const ManageExpense = ({route, navigation}) => {
    const editedExpenseId = route.params?.expenseId;

    const isEditing = !!editedExpenseId;
useLayoutEffect(() => {
    navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense'
     })
    
},[navigation, isEditing])
 

  return (
    <Text>hello</Text>
  )
}

export default ManageExpense