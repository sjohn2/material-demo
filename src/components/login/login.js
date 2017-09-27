
import React, { Component } from 'react';



class Login extends Component{
    
      render(){
        return(
        <form action="">
            <fieldset>
              <legend>Login form</legend>
              <div>
                <label for="username">Your username</label>
                <input type="text" id="username" aria-describedby="username-tip" required />
                <div role="tooltip" class="tooltip" id="username-tip">Your username is your email address</div>
              </div>
              <div>
                <label for="password">Your password</label>
                <input type="text" id="password" aria-describedby="password-tip" required />
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
    }

    }

export default Login;