import React from 'react'
import { useSelector } from 'react-redux'
import Card from './shared/Card'
import LoanCalculator from './LoanCalculator/LoanCalculator'
import {
  selectMonthlyInstallment,
  selectServerErrorMonthlyInstallment,
} from './LoanCalculator/loanCalculatorSlice'
import Alert from './shared/Alert'
import styles from './App.module.css'

function App() {
  const monthlyInstallment = useSelector(selectMonthlyInstallment)
  const serverErrorMonthlyInstallment = useSelector(
    selectServerErrorMonthlyInstallment,
  )

  return (
    <>
      <Card>
        <Alert message={serverErrorMonthlyInstallment} />
        <LoanCalculator />
      </Card>

      <Card>
        {monthlyInstallment ? (
          <p data-testid="monthly-installment">
            Monthly Installment: <strong>{monthlyInstallment} EUR</strong>
          </p>
        ) : (
          <p className={styles.lightGrey} data-testid="default-message">
            Please set <strong>Amount</strong> and <strong>Duration</strong> and
            click <strong>Calculate</strong> 👆🏼
          </p>
        )}
      </Card>
    </>
  )
}

export default App
