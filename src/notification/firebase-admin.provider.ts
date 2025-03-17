import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import serviceAccount from '../../secondproject-6a97f-firebase-adminsdk-fbsvc-d455a15a37.json';
//initialiser firebase
export const firebaseAdminProvider = {
  provide: 'FIREBASE_ADMIN',
  useFactory: () => {
    const defaultApp = admin.initializeApp({
      credential: admin.credential.cert(
        serviceAccount as ServiceAccount
      ),
    });
    return { defaultApp };
  },
};