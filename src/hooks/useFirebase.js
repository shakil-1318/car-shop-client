import { getAuth, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setauthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                setauthError('');
                // saved user to db
                savedUser(email, name);
                //set name with new user
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setauthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setauthError('');
            })
            .catch((error) => {
                setauthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // observe user state changed

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://secure-fortress-47918.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }

    // saved user to database
    const savedUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://secure-fortress-47918.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        authError,
        isLoading,
        user,
        admin,
        registerUser,
        loginUser,
        logOut
    }

}

export default useFirebase;