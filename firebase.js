import React from 'react'
import Firebase from 'firebase'

const objectToArray = obj => {
  const out = []

  for (let key in obj)
    out.push({ key, ...obj[key] })

  return out
}

export default function firebase(url, Comp) {
  const ref = new Firebase(url) // `https://chatsam.firebaseio.com/${id}`

  class view extends React.Component {
    constructor() {
      super()

      this.state = {
        val: false,
        loaded: false
      }
    }

    update(snap) {
      this.setState({ val: objectToArray(snap.val()), loaded: true })
    }

    componentDidMount() {
      ref.on('value', snap => this.update(snap))
    }

    componentWillUnmount() {
      ref.off('value')
    }

    render() {
      return <Comp.view {...this.props} state={this.state} firebase={ref}/>
    }
  }

  return { update: Comp.update, view }
}
