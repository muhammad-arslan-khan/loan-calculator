import { configureStore } from '@reduxjs/toolkit'
import loanCalculatorReducer from '../components/LoanCalculator/loanCalculatorSlice'

export default configureStore({
  reducer: {
    loanCalculator: loanCalculatorReducer,
  },
})
