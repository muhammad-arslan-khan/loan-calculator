import React from 'react'
import { render } from '@testing-library/react'
import Alert from './Alert'
import { SERVER_ERROR } from '../../constants/errors'

describe('<Alert />', () => {
  it('should render a alert component', () => {
    const { getByTestId } = render(<Alert message={SERVER_ERROR} />)
    expect(getByTestId('alert')).toHaveTextContent(SERVER_ERROR)
  })
})
