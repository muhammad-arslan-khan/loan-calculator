import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCalculating, calculateLoanAsync } from './loanCalculatorSlice'
import { REQUIRED } from '../../constants/errors'
import styles from './LoanCalculator.module.css'

const LoanCalculator = () => {
  const { register, handleSubmit, errors } = useForm()
  const isCalculating = useSelector(selectIsCalculating)
  const dispatch = useDispatch()

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
        className={styles.input}
        ref={register({
          required: REQUIRED,
          min: {
            value: 10000,
            message: 'Minimum loan value is 10000',
          },
          max: {
            value: 100000,
            message: 'Maximum loan value is 100000',
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

      <button type="submit" disabled={isCalculating}>
        {isCalculating ? 'Calculating...' : 'Calculate'}
      </button>
    </form>
  )
}

export default LoanCalculator
