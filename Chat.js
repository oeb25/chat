import React from 'react'
import firebase from './firebase'
import ChatInput from './ChatInput'

export const update = (state = {}, view) => {}

export const view = ({ state, firebase }) =>
  state.loaded ?
    <div>
      <ul>
        {state.val.map((msg, key) => <li key={key}>{msg.name}: {msg.message}</li>)}
      </ul>
      <ChatInput onSubmit={msg => firebase.push(msg)}/>
    </div>
  :
    <div>Loading...</div>

export const create = id =>
  firebase(`https://chatsam.firebaseio.com/${id}`, { update, view })
