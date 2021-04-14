import React from 'react';
import firebase from '../utils/firebaseConfig';

const Main = () => {
    return (
        <main>
            <h1>Félicitation !</h1>
            <h4>Bonjour {firebase.auth().currentUser.displayName}, vous êtes bien connectés</h4>
            <button onClick={() => firebase.auth().signOut()}>Se déconnecter</button>

        </main>


    );
};

export default Main;