import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import axiosMock from 'axios'
import { render } from '../utils/testUtils'
import App from './App'

jest.mock('axios')

describe('<App />', () => {
  it('should check that default message exists', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('default-message')).toBeInTheDocument()
  })

  it('should display the monthly installment value', async () => {
    axiosMock.post.mockResolvedValueOnce({
      data: { amount: 15000, duration: 2, monthlyInstallment: 200 },
    })

    const { getByLabelText, getByTestId } = render(<App />)
    const amount = getByLabelText(/amount/i)
    const duration = getByLabelText(/duration/i)
    const calculate = getByTestId(/calculate/i)

    fireEvent.change(amount, { target: { value: '15000' } })
    fireEvent.change(duration, { target: { value: '2' } })
    await waitFor(() => {
      fireEvent.click(calculate)
    })

    expect(getByTestId('monthly-installment')).toHaveTextContent(
      'Monthly Installment: 200 EUR',
    )
    expect(axiosMock.post).toHaveBeenCalledTimes(1)
  })
})
