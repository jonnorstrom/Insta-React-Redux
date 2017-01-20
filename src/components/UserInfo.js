import React, { Component } from 'react'

class UserInfo extends Component {

  render() {
    const { name, img_url, fetching, pictures } = this.props.user
    if (fetching) {
      return (
        <p>loading ...</p>
      )
    }

    return(
        <div>
          <img src={img_url} alt={'Prof. Pic'}/>
          <p>{name}</p>
          <button onClick={this.props.fetchUser}>Fetch User</button>
          <pre>{`${JSON.stringify(pictures)}`}</pre>
        </div>
    )
  }
}

export default UserInfo;
