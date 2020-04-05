import React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'
import store from '../store/store'

function render(ui, options) {
  return rtlRender(<Provider store={store}>{ui}</Provider>, options)
}

export { render }
