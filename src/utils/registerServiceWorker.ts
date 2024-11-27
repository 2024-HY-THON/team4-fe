import { messaging } from "../firebase"; // Firebase 메시징 객체 가져오
import { getToken } from "firebase/messaging";

export const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );
    console.log("Service Worker registered:", registration);

    const vapidKey = import.meta.env.VITE_VAPID_KEY;

    // FCM 토큰 요청
    const token = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log("FCM Token:", token);
    } else {
      console.error("No registration token available.");
    }
  } catch (error) {
    console.error("Service Worker registration failed:", error);
  }
};
