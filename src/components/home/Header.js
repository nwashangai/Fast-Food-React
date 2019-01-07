import React, { Component } from 'react';
import Utilities from '../../utils';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    if(Utilities.formValid(this.state, 2)) {
      //
    } else {
      //
    }
  }
  render() {
    const {
      handleSubmit,
      onChange
    } = this;
    return(
      <div className="topnav">
        <h1><img src="./assets/images/emblem.png" alt="Snow" id="logo"/> Fast Food Fast</h1>
        <form className="login" id="login-form">
            <span className='my-login small'><input id="lemail" name="email" onChange={onChange} type="email" placeholder="email" required/></span>
            <span className='my-login small'><input id="lpassword" name="password" onChange={onChange} type="password" placeholder="password"/></span>
            <span className='small'><input id="login-click" type="button" value="LOGIN"  onClick={handleSubmit}/></span>
        </form>
      </div>
    );
  }
}

export default Header;