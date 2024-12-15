import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'app-ar-f88a4',
        appId: '1:56468287326:web:29d74f5e2601ec812b29cf',
        storageBucket: 'app-ar-f88a4.firebasestorage.app',
        apiKey: 'AIzaSyDV9UZJ4B4qLg0_K37E2Pn6lmUJ3M4Ib3U',
        authDomain: 'app-ar-f88a4.firebaseapp.com',
        messagingSenderId: '56468287326',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
