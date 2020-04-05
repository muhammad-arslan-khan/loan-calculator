import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCalculating, calculateLoanAsync } from './loanCalculatorSlice'
import { REQUIRED } from '../../constants/errors'
import styles from './LoanCalculator.module.css'

const LoanCalculator = () => {
  const dispatch = useDispatch()
  const isCalculating = useSelector(selectIsCalculating)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    dispatch(calculateLoanAsync(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        name="amount"
        type="number"
        placeholder="Enter amount..."
        className={styles.input}
        ref={register({
          required: REQUIRED,
          min: {
            value: 10000,
            message: 'Minimum loan amount is 10000',
          },
          max: {
            value: 100000,
            message: 'Maximum loan amount is 100000',
          },
        })}
      />
      {errors.amount && <pre>{errors.amount.message}</pre>}

      <label htmlFor="duration" className={styles.mt20}>
        Duration
      </label>
      <input
        id="duration"
        name="duration"
        type="number"
        placeholder="Enter duration..."
        className={styles.input}
        ref={register({
          required: REQUIRED,
          min: {
            value: 1,
            message: 'Minimum duration is 1 year',
          },
          max: {
            value: 5,
            message: 'Maximum duration is 5 years',
          },
        })}
      />
      {errors.duration && <pre>{errors.duration.message}</pre>}

      <button type="submit" disabled={isCalculating} data-testid="calculate">
        {isCalculating ? 'Calculating...' : 'Calculate'}
      </button>
    </form>
  )
}

export default LoanCalculator
