// firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js"
);

self.addEventListener("install", function (e) {
  console.log("fcm service worker가 install.");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm service worker가 activate.");
});

const firebaseConfig = {
  apiKey: "AIzaSyDSqU0TbdqtY8Ji67b4MeZleWcep9NAm8c",
  authDomain: "http://hy-thon-team-4.firebaseapp.com",
  projectId: "hy-thon-team-4",
  storageBucket: "hy-thon-team-4.firebasestorage.app",
  messagingSenderId: "463766640178",
  appId: "1:463766640178:web:a9833194904c7e53c60e2b",
};

firebase.initializeApp(firebaseConfig);
// 초기화

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(payload);
  const notificationTitle = payload.title;
  const notificationOptions = {
    body: payload.body,
    icon: payload.icon,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// push 알림이 왔을시
// TODO mac 크롬 사용시 알림을 열어야 확인 가능
self.addEventListener("push", function (event) {
  console.log(event);
  // const data = event.data.json(); // Assuming the server sends JSON
  const options = {
    body: "tmpBody",
  };
  event.waitUntil(self.registration.showNotification("tmpTitle", options));
});

// push 알림을 클릭했을시
self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
