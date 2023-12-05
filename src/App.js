// import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login'
import LogoutButton from './components/logout'



import { useEffect } from 'react';
import {gapi} from 'gapi-script';

const ClientId = "577366008238-j52fefu9587n28vdhi6iej3n0j13tdl2.apps.googleusercontent.com";


function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        ClientId : ClientId,
        scope: ""

      })
    };
    gapi.load('client:auth2', start)
  });
  return (
    <div className="App">
  <LoginButton/>
  <LogoutButton/>
    </div>
  );
}

export default App;
