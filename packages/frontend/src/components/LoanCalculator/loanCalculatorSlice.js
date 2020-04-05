import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { SERVER_ERROR } from '../../constants/errors'

export const slice = createSlice({
  name: 'monthlyInstallment',
  initialState: {
    isCalculating: false,
    monthlyInstallment: null,
    serverErrorMonthlyInstallment: null,
  },
  reducers: {
    setIsCalculating: (state, action) => {
      state.isCalculating = action.payload
    },
    setMonthlyInstallment: (state, action) => {
      state.monthlyInstallment = action.payload
    },
    setServerError: (state, action) => {
      state.serverErrorMonthlyInstallment = action.payload
    },
  },
})

export const {
  setIsCalculating,
  setMonthlyInstallment,
  setServerError,
} = slice.actions

export const calculateLoanAsync = data => async dispatch => {
  dispatch(setServerError(null))
  dispatch(setIsCalculating(true))

  try {
    const res = await axios.post('/api/calculate', data)
    dispatch(setMonthlyInstallment(res.data.monthlyInstallment))
  } catch (err) {
    dispatch(setServerError(SERVER_ERROR))
  } finally {
    dispatch(setIsCalculating(false))
  }
}

export const selectMonthlyInstallment = state =>
  state.monthlyInstallment.monthlyInstallment
export const selectIsCalculating = state =>
  state.monthlyInstallment.isCalculating

export const selectServerErrorMonthlyInstallment = state =>
  state.monthlyInstallment.serverErrorMonthlyInstallment

export default slice.reducer
