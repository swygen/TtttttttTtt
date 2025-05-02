importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging.js');

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdyMFDsMzkprimG3YKiS3Ipbq17rtASKI",
  authDomain: "game-wev.firebaseapp.com",
  projectId: "game-wev",
  storageBucket: "game-wev.firebasestorage.app",
  messagingSenderId: "191658439875",
  appId: "1:191658439875:web:084d88f50f4dd6a6ee9e76"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    image: payload.notification.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
