import {GoogleLogin} from 'react-google-login';
// import './login.css';

const ClientId = "577366008238-j52fefu9587n28vdhi6iej3n0j13tdl2.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! current user:" , res.profileObj)
    }
    const onFailure = (res) => {
        console.log("LOGIN FAIL! res:" , res);
    }

    return(
        <div id ="LogInButton">
            <GoogleLogin
            clientId={ClientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            redirectUri="https://localhost:3001"            
            />
              
        </div>


    )
}
export default Login;