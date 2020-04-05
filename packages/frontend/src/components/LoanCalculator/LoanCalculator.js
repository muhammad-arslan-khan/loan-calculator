import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { calculateLoanAsync } from './loanCalculatorSlice'
import styles from './LoanCalculator.module.css'

const LoanCalculator = () => {
  const { register, handleSubmit } = useForm()
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
        ref={register({ required: true, min: 10000, max: 100000 })}
      />
      <pre>Some error</pre>

      <label htmlFor="duration" className={styles.mt20}>
        Duration
      </label>
      <input
        id="duration"
        name="duration"
        type="number"
        className={styles.input}
        ref={register({ required: true, min: 1, max: 5 })}
      />
      <pre>Some error</pre>

      <button type="submit">Calculate</button>
    </form>
  )
}

export default LoanCalculator
