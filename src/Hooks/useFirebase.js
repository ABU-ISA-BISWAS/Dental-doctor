import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import app from '../firebase.init';

const useFirebase =()=>{
    const auth = getAuth(app);
    const [user,setUser]=useState({});
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
   
  
    const handleGoogleSignIn=() => {
      signInWithPopup(auth,provider)
      .then(result =>{
        const user =result.user;
        console.log(user);
       setUser(user);
      })
      .catch(error =>{
        console.log(error);
      })
    }

    const handleGitHubSignIn=() => {
        signInWithPopup(auth,GitHubProvider)
        .then(result =>{
          const user =result.user;
         setUser(user);
        })
        .catch(error =>{
          console.log(error);
        })
      }

      useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
    },[]);

      const handleSignOut =()=>{
        signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((error) => {
          setUser({});
        });
      }

    return {
        user,
        setUser,
        handleGoogleSignIn,
        handleGitHubSignIn,
        handleSignOut
    }
}
export default useFirebase;