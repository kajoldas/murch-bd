import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,  onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import authInit from '../Firebase/Firebase.init';


authInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState()

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user;
                setUser(result.user);
                window.localStorage.setItem("email", result.user.email);
            })
            .finally(() => setIsLoading(false))


            .catch((error) => {
                // ---------Handle Errors here.---------------
                const errorCode = error.code;
                // const errorMessage = error.message;
                setError(error.message)
                console.log(errorCode);

            });
    }


    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
    }

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                handleUserInfoRegister(user.email);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    };

    const handleUserInfoRegister = (email) => {
        fetch("https://fierce-sands-85550.herokuapp.com/addUserInfo", {
            method:"POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({email}),
        })
        .then((res) => res.json())
        .then((result => console.log(result)))
    }




    //---------User State Change Observation
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state changed', user);
                setUser(user);
            }
        });
        // return () => unSubscribed;
    }, [auth])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        error,
        isLoading,
        googleSignIn,
        signInUsingGithub,
        logout,
        handleUserRegister
    }
};  

export default useFirebase;