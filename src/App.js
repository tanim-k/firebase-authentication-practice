import logo from './logo.svg';
import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import app from './firebase.init';
import {useState} from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const hndlGooSignIn = () =>{
    const googleProvider = new GoogleAuthProvider
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setUser(user)

    })
    .catch(error =>{
      console.error(error);
    })
  }
  return (
    <div className="App">
      <button onClick={hndlGooSignIn}>go gol sign in</button>
      <h1>name:{user.displayName}</h1>
      <h6>photo: <img src={user.photoURL} alt="" /> </h6>
    </div>
  );
}

export default App;
