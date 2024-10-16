importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyB-G2mM-iSv5WuJyUZyIw27avuRqe39QvE",
    authDomain: "talabati-3f574.firebaseapp.com",
    projectId: "talabati-3f574",
    storageBucket: "talabati-3f574.appspot.com",
    messagingSenderId: "148747664414",
    appId: "1:148747664414:android:01b8bdd6b144e00f08420f",
    measurementId: ""
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    return self.registration.showNotification(payload.data.title, {
        body: payload.data.body ? payload.data.body : '',
        icon: payload.data.icon ? payload.data.icon : ''
    });
});