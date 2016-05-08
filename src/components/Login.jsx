import React from 'react'
import mui from 'material-ui'

var {RaisedButton,TextField}=mui

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentUserId: "",
        }
    }
    onLogin(event){
        event.preventDefault();
        this.firebaseRef = new Firebase('https://synaptop-challenge.firebaseio.com/places')
      
        this.firebaseRef.authWithPassword({
            email: this.refs.email.getValue(),
            password: this.refs.password.getValue()
        },(err,authData)=>{
            if(err){
                // console.log(err)
            }else{
                // console.log('loggin',authData)             
                this.setState({currentUserId: authData.uid})
            }
        });

    }
    render(){
        return (  
            <form onSubmit={this.onLogin.bind(this)}>
                <TextField
                  hintText="Email" ref="email"
                /><br />
                <br />
                <TextField
                  type="password" hintText="Password" ref="password"
                /><br />
                <RaisedButton label="Submit" type="submit" style={{margin: 12}} />
            </form>
        )
    }
}

export default Login;