import { configureStore } from '@reduxjs/toolkit'
import monthlyInstallmentReducer from '../components/LoanCalculator/loanCalculatorSlice'

export default configureStore({
  reducer: {
    monthlyInstallment: monthlyInstallmentReducer,
  },
})
