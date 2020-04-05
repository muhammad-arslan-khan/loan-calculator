import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const slice = createSlice({
  name: 'monthlyInstallment',
  initialState: {
    monthlyInstallment: null,
    isFetching: false,
  },
  reducers: {
    setIsFetching: state => {
      state.isFetching = true
    },
    setMonthlyInstallment: (state, action) => {
      state.monthlyInstallment = action.payload
      state.isFetching = false
    },
  },
})

export const { setMonthlyInstallment } = slice.actions

export const calculateLoanAsync = data => async dispatch => {
  try {
    const res = await axios.post('/api/calculate', data)
    console.log('res', res.data)
    dispatch(setMonthlyInstallment(100))
  } catch (err) {
    console.log(err)
  }
}

export const selectMonthlyInstallment = state =>
  state.monthlyInstallment.monthlyInstallment

export default slice.reducer
