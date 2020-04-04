import React from 'react'
import Card from './shared/Card'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Card>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className={styles.input}
          id="amount"
          min="10000"
          max="100000"
        />

        <label htmlFor="duration" className={styles.mt20}>
          Duration
        </label>
        <input
          type="number"
          className={styles.input}
          id="duration"
          min="1"
          max="5"
        />

        <button>Calculate</button>
      </Card>

      <Card>
        <p>
          Monthly Installment: <span>5390.61 EUR</span>
        </p>
      </Card>
    </>
  )
}

export default App
