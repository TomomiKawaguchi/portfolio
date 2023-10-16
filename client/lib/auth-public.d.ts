import { Auth, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'

export declare function signInWithEmailAndPassword(auth: Auth, email: string, password: string): Promise<UserCredential>;

export declare function sendEmailVerification(user: User, actionCodeSettings?: ActionCodeSettings | null): Promise<void>;

export declare interface UserCredential {
    /**
     * The user authenticated by this credential.
     */
    user: User;
    /**
     * The provider which was used to authenticate the user.
     */
    providerId: string | null;
    /**
     * The type of operation which was used to authenticate the user (such as sign-in or link).
     */
    operationType: typeof OperationType[keyof typeof OperationType];
}

const signUp = async () => {
    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await sendEmailVerification(userCredential.user)
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e)
      }
    }
  }


