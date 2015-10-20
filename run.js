import React from 'react'
import { render } from 'react-dom'

export default function run(App) {
  let state

  const dispatch = action => {
    state = App.update(state, action)

    render(<App.view state={state} dispatch={dispatch} />, document.getElementById('app'))
  }

  dispatch({ type: 'init' })
}
