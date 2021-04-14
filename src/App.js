import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import Login from './components/pages/Login';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import firebase from './utils/firebaseConfig';
import Main from './components/Main';
import { StyledFirebaseAuth } from 'react-firebaseui';


const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
    })
  }, []);

  return (
    <header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>


      <div className="app" style={{ textAlign: 'center' }}>
        {isSignedIn ? (
          <Main />
        ) : (
          <div className="login-page">
            <h1>Connectez-vous</h1>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}

      </div>

    </header>

  );


};

export default App;