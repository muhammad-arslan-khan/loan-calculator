import React from 'react'
import { useSelector } from 'react-redux'
import Card from './shared/Card'
import LoanCalculator from './LoanCalculator/LoanCalculator'
import { selectMonthlyInstallment } from './LoanCalculator/loanCalculatorSlice'

import styles from './App.module.css'

function App() {
  const monthlyInstallment = useSelector(selectMonthlyInstallment)

  return (
    <>
      <Card>
        <LoanCalculator />
      </Card>

      <Card>
        {monthlyInstallment ? (
          <p>
            Monthly Installment: <strong>{monthlyInstallment} EUR</strong>
          </p>
        ) : (
          <p className={styles.lightGrey}>
            Please set <strong>Amount</strong> and <strong>Duration</strong> and
            click <strong>Calculate</strong> 👆🏼
          </p>
        )}
      </Card>
    </>
  )
}

export default App
