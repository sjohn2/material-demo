
import React, { Component } from 'react';



class Login extends Component{

      constructor(props){
        super(props);
        this.state={
          username: '',
          password: ''
        }
      }
    
      render(){
        return(
        <form action="">
            <fieldset>
              <legend>Login form</legend>
              <div>
                <label for="username">Your username</label>
                <input type="text" id="username" aria-describedby="username-tip" required onChange={(event, newValue) => this.setState({username:newValue})} />
                <div role="tooltip" class="tooltip" id="username-tip">Your username is your email address</div>
              </div>
              <div>
                <label for="password">Your password</label>
                <input type="text" id="password" aria-describedby="password-tip" required onChange={(event, newValue) => this.setState({password:newValue})} />
                <div role="tooltip" class="tooltip" id="password-tip">Was emailed to you when you signed up</div>
              </div>
              <div>
                 <input type="button" title="Login" value="Login" onClick={(event) => this.handleClick(event)} />
                 <input type="button" title="Cancel" value="Cancel" />
              </div>
            </fieldset>
          </form>
        )
      }
    
    handleClick(event){
        console.log(event);
        this.state.username = "Github";

    }

    }

export default Login;