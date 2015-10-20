import React from 'react'

export default class ChatInput extends React.Component {
  submit(e) {
    e.preventDefault()

    if (!this.props.onSubmit)
      return false

    this.props.onSubmit({
      name: this.refs.name.value,
      message: this.refs.message.value
    })

    this.refs.message.value = ''

    return false
  }

  render() {
    return <form onSubmit={e => this.submit(e)}>
      <input type="text" placeholder="Name" ref="name" />
      <input type="text" placeholder="Message" ref="message" />

      <button type="submit">Send</button>
    </form>
  }
}
