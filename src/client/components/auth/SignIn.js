import React from 'react';
import Welcome from './Welcome.jpg'
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return ( 
        <div id="sign-in-bg">
        <section
          className="section"
          id="bg-img"
          style={{
            background: `url(${Welcome}) no-repeat center`,
          }}
        >
          <form
            id="sign-in-form"
            onSubmit={this.handleSubmit}
            className="container"
          >
            {/* EMAIL */}
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
            </div>
            {/* PASSWORD */}
            <div className="field">
              <label className="label ">Password</label>
              <p className="control has-icons-left">
                <input
                  type="password"
                  id="password"
                  className={`input ${this.state.inputColor}`}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
              {/* {loginError && (
                <p className="error has-text-white">
                  Incorrect email or password.
                </p>
              )} */}
            </div>
            <div className="column" id="login">
              <button type="submit" className="button is-warning is-large">
                Login
              </button>
            </div>
            <div className="column" id="login">
              <p className="title is-5" id="acc">
                Don't have an account?
              </p>
            </div>
            <div className="column" id="login">
              {/* <Link to="/signup">
                <button className="button is-danger is-wide">Sign Up</button>
              </Link> */}
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default SignIn;