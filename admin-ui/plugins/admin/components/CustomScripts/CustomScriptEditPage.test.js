import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomScriptEditPage from './CustomScriptEditPage'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import i18n from '../../../../app/i18n'
import { I18nextProvider } from 'react-i18next'
import item from "./item"
import script from "./script.test"

const permissions = [
  'https://jans.io/oauth/config/attributes.readonly',
  'https://jans.io/oauth/config/attributes.write',
  'https://jans.io/oauth/config/attributes.delete',
]
const INIT_STATE = {
  permissions: permissions,
}
const INIT_CUSTOM_SCRIPT_STATE = {
  items: [
    script,
  ],
  item: item,
  loading: false,
}
const store = createStore(
  combineReducers({
    authReducer: (state = INIT_STATE) => state,
    customScriptReducer: (state = INIT_CUSTOM_SCRIPT_STATE) => state,
    noReducer: (state = {}) => state,
  }),
)

const Wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>{children}</Provider>
  </I18nextProvider>
)

it('Should render the Custom Script edit page properly', () => {
  render(<CustomScriptEditPage />, { wrapper: Wrapper })
  screen.getByText(/Name/)
  screen.getByText(/Description/)
  screen.getByText(/Select SAML ACRS/)
  screen.getByText(/Script Type/)
})
