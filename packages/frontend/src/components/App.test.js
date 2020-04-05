import React from 'react'
import { render } from '../utils/testUtils'
import App from './App'

describe('<App />', () => {
  it('should check that default message exists', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId('default-message')).toBeInTheDocument()
  })

  it('should display the monthly installment value', () => {})
})
