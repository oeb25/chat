import React from 'react'
import * as chat from './Chat'

const init = () => ({
  Lobby: chat.create('lobby'),
  Chat: chat.create('default'),
})

const camelize = str => str.toLowerCase().replace(/\s/g, "") 

const CHANGE = 'CHANGE'
export const update = (state = init(), action) => {
  switch (action.type) {
    case CHANGE:
      return { ...state, Chat: chat.create(camelize(action.id || 'default')) }
    default:
      return state
  }
}

export const view = ({ state, dispatch }) => {
  const { Lobby, Chat } = state

  return <div>
    Hello, {JSON.stringify(state)}
    <hr/>
    <div>
      <h1>Lobby</h1>
      <Lobby.view />
    </div>
    <div>
      <h1>Custom Chat - <input type="text" placeholder="Room id"
        onChange={e => dispatch({ type: CHANGE, id: e.target.value })} /></h1>
      <Chat.view />
    </div>
  </div>
}
