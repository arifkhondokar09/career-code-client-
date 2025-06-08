import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // create User by firebase
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user by firebase
    const loginUser = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }
    //  google signIn
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // signout from firebase
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('hello user', currentUser)
            if (currentUser?.email) {
                const userData = { email: currentUser.email };

                axios.post('http://localhost:5000/jwt', userData, {
                    withCredentials: true
                })
                    .then(res => console.log("response after jwt", res.data))
                    .catch(error => console.log(error))
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userinfo = {
        loading,
        createUser,
        loginUser,
        googleSignIn,
        signOutUser,
        user
    }

    return (
        <AuthContext value={userinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;