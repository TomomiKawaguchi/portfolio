import {
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
    signOut,
  } from 'firebase/auth';
  import { auth } from "./firebase";
  
  
  export const login = (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  
  export const logout = (): Promise<void> => {
    return signOut(auth);
  };


// import { createContext, useState, useEffect, useContext } from "react";
// import { User } from "@firebase/auth-types";
// import firebase, { auth } from "./firebase";

// type AuthContextType = {
//     currentUser: User | null;
//     login?: () => Promise<void>;
//     logout?: () => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType>({ currentUser: null });

// export const useAuth = () => {
//     return useContext(AuthContext);
// };

// type Props = {
//     children?: JSX.Element;
// };

// const AuthProvider = ({ children }: Props): JSX.Element => {
//     const [currentUser, setCurrentUser] = useState<User | null>(null);
//     const [isLoading, setIsLoading] = useState(true);

//     const login = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         return auth.signInWithRedirect(provider);
//     };

//     const logout = () => {
//         return auth.signOut();
//     };

//     useEffect(() => {
//         return auth.onAuthStateChanged((user: User | null) => {
//             setCurrentUser(user);
//             setIsLoading(false);
//         });
//     }, []);

//     const value: AuthContextType = {
//         currentUser,
//         login,
//         logout,
//     };


//     return (
//         <AuthContext.Provider value={value}>
//             {isLoading ? <p>Loading...</p> : children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;