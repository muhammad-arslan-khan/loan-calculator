import React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender, fireEvent, waitFor } from '@testing-library/react'
import store from '../../store/store'
import LoanCalculator from './LoanCalculator'
import { REQUIRED } from '../../constants/errors'

function render(ui, options) {
  return rtlRender(<Provider store={store}>{ui}</Provider>, options)
}

describe('<LoanCalculator />', () => {
  it('should check that amount & duration fields exist', () => {
    const { getByLabelText } = render(<LoanCalculator />)

    expect(getByLabelText(/amount/i)).toBeInTheDocument()
    expect(getByLabelText(/duration/i)).toBeInTheDocument()
  })

  it('should make sure that input fields are required', async () => {
    const { getByLabelText, getByTestId, getAllByText } = render(
      <LoanCalculator />,
    )
    const amount = getByLabelText(/amount/i)
    const duration = getByLabelText(/duration/i)
    const calculate = getByTestId(/calculate/i)

    fireEvent.change(amount, { target: { value: '' } })
    fireEvent.change(duration, { target: { value: '' } })
    await waitFor(() => {
      fireEvent.click(calculate)
    })

    expect(getAllByText(REQUIRED)).toHaveLength(2)
  })

  it('should make sure that input fields display min and max value errors', async () => {
    const { getByLabelText, getByTestId, getByText } = render(
      <LoanCalculator />,
    )
    const amount = getByLabelText(/amount/i)
    const duration = getByLabelText(/duration/i)
    const calculate = getByTestId(/calculate/i)

    fireEvent.change(amount, { target: { value: '1500' } })
    fireEvent.change(duration, { target: { value: '9' } })
    await waitFor(() => {
      fireEvent.click(calculate)
    })

    expect(getByText(/minimum loan amount is 10000/i)).toBeInTheDocument()
    expect(getByText(/maximum duration is 5 years/i)).toBeInTheDocument()
  })

  it('should submit form', async () => {
    const { getByLabelText, getByTestId } = render(<LoanCalculator />)
    const amount = getByLabelText(/amount/i)
    const duration = getByLabelText(/duration/i)
    const calculate = getByTestId(/calculate/i)

    fireEvent.change(amount, { target: { value: '15000' } })
    fireEvent.change(duration, { target: { value: '2' } })
    await waitFor(() => {
      fireEvent.click(calculate)
    })

    expect(calculate).toBeDisabled()
    expect(calculate).toHaveTextContent(/calculating/i)
  })
})
