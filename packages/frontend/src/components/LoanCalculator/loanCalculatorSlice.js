import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const slice = createSlice({
  name: 'monthlyInstallment',
  initialState: {
    monthlyInstallment: null,
    isCalculating: false,
  },
  reducers: {
    setIsCalculating: (state, action) => {
      state.isCalculating = action.payload
    },
    setMonthlyInstallment: (state, action) => {
      state.monthlyInstallment = action.payload
    },
  },
})

export const { setIsCalculating, setMonthlyInstallment } = slice.actions

export const calculateLoanAsync = data => async dispatch => {
  dispatch(setIsCalculating(true))

  try {
    const res = await axios.post('/api/calculate', data)
    dispatch(setMonthlyInstallment(res.data.monthlyInstallment))
  } catch (err) {
    console.log(err)
  } finally {
    dispatch(setIsCalculating(false))
  }
}

export const selectMonthlyInstallment = state =>
  state.monthlyInstallment.monthlyInstallment
export const selectIsCalculating = state =>
  state.monthlyInstallment.isCalculating

export default slice.reducer
