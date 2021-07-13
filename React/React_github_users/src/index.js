import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const clientID = process.env.REACT_APP_CLIENT_ID;
const auth_domain = process.env.REACT_APP_AUTH_DOMAIN;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth_domain}
      clientId={clientID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
