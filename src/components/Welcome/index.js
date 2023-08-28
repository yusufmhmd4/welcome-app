import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  subscribeChannel = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  render() {
    const {subscribe} = this.state
    const isSubscribe = subscribe ? 'Subscribed' : 'Subscribe'

    return (
      <div className="app-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="thank-you-paragraph">Thank you! Happy Learning</p>
        <button
          type="button"
          className="button"
          onClick={this.subscribeChannel}
        >
          {isSubscribe}
        </button>
      </div>
    )
  }
}

export default Welcome
