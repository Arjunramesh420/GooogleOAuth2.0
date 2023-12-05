import {GoogleLogout} from 'react-google-login';
// import './logout.css';


const ClientId = "577366008238-j52fefu9587n28vdhi6iej3n0j13tdl2.apps.googleusercontent.com";
const onSuccess = () => {
    console.log("LOG OUT SUCCESSFUL!");
}
function Logout() {
    return(
    <div id ="LogOutButton">
         <GoogleLogout
            clientId={ClientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            redirectUri="https://localhost:3000" // Make sure this matches your API Console settings



        />
    </div>
    )
}
export default Logout;