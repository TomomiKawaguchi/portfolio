
// // Import the functions you need from the SDKs you need
// import { getApp, getApps, initializeApp } from 'firebase/app'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);




// export const initializeFirebaseApp = () =>
//   !getApps().length ? initializeApp(firebaseConfig) : getApp()


import { createContext, useState, useEffect, useContext } from "react";
import { User } from "@firebase/auth-types";
import firebase, { auth } from "./firebase";

type AuthContextType = {
    currentUser: User | null;
    login?: () => Promise<void>;
    logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({ currentUser: null });

export const useAuth = () => {
    return useContext(AuthContext);
};

type Props = {
    children?: JSX.Element;
};

const AuthProvider = ({ children }: Props): JSX.Element => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return auth.signInWithRedirect(provider);
    };

    const logout = () => {
        return auth.signOut();
    };

    useEffect(() => {
        return auth.onAuthStateChanged((user: User | null) => {
            setCurrentUser(user);
            setIsLoading(false);
        });
    }, []);

    const value: AuthContextType = {
        currentUser,
        login,
        logout,
    };


    return (
        <AuthContext.Provider value={value}>
            {isLoading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;