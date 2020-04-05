import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const slice = createSlice({
  name: 'loanCalculator',
  initialState: {
    value: 0,
    isFetching: false,
  },
  reducers: {
    setIsFetching: state => {
      state.isFetching = true
    },
    calculate: (state, action) => {
      state.value += action.payload
      state.isFetching = false
    },
  },
})

export const { calculate } = slice.actions

export const calculateLoanAsync = data => async dispatch => {
  try {
    const res = await axios.post('/api/calculate', data)
    console.log('res', res.data)
    dispatch(calculate(100))
  } catch (err) {
    console.log(err)
  }
}

export const selectCount = state => state.loanCalculator

export default slice.reducer
