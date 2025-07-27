import { initializeApp, cert, getApps, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

let firebaseApp: App | undefined;
let db: any = null;

export const connectDB = () => {
  try {
    const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || path.join(__dirname, '../../firebaseServiceAccountKey.json');
    
    // Check if service account file exists
    if (!fs.existsSync(serviceAccountPath)) {
      console.warn('⚠️  No Firebase service account found. Running in demo mode without database.');
      return;
    }

    if (!getApps().length) {
      firebaseApp = initializeApp({
        credential: cert(serviceAccountPath),
      });
      console.log('Firebase initialized');
    }
    
    db = getFirestore();
  } catch (error) {
    console.warn('⚠️  Firebase initialization failed. Running in demo mode without database.');
    console.error('Firebase error:', error);
  }
};

export const getDB = () => {
  if (!db) {
    console.warn('⚠️  Database not initialized. Running in demo mode.');
  }
  return db;
}; 