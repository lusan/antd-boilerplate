import React, { Component } from 'react'

import User from './User'

class Users extends Component {
  constructor (props) {
    super(props)

    this.loadUser = this.loadUser.bind(this)
  }

  loadUser (login) {
    this.props.fetchUserAction(login)
  }

  render () {
    return (
      <div>
        <ul>
          {this.props.users.map(login =>
            <li key={login}>
              {login}
              <button type='button' onClick={this.loadUser.bind(this, login)}>Load user</button>
            </li>
          )}
        </ul>
        {this.props.loading && <p>Please wait!</p>}
        {this.props.current && <User {...this.props.current} />}
      </div>
    )
  }
}

export default Users
