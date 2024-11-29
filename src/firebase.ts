// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSqU0TbdqtY8Ji67b4MeZleWcep9NAm8c",
  authDomain: "http://hy-thon-team-4.firebaseapp.com",
  projectId: "hy-thon-team-4",
  storageBucket: "hy-thon-team-4.firebasestorage.app",
  messagingSenderId: "463766640178",
  appId: "1:463766640178:web:a9833194904c7e53c60e2b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(firebaseApp);

export async function requestPermission() {
  const permission = await Notification.requestPermission();

  if (permission === "denied") {
    alert("푸시 알림을 허용하려면 브라우저 설정에서 알림을 활성화해 주세요.");
  }
  console.log(permission);
}

requestPermission();
