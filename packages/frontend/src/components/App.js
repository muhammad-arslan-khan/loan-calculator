import React from 'react'
import Card from './shared/Card'
import LoanCalculator from './LoanCalculator/LoanCalculator'

function App() {
  return (
    <>
      <Card>
        <LoanCalculator />
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
