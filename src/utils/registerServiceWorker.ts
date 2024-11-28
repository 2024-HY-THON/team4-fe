import { messaging } from "../firebase"; // Firebase 메시징 객체 가져오
import { getToken } from "firebase/messaging";

const retryCount = 1;

export const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      "/pwabuilder-sw.js",
      { scope: "/firebase-cloud-messaging-push-scope" }
    );
    sendKeyToServer(registration, 0);
  } catch (error) {
    console.error("Service Worker registration failed:", error);
  }
};

async function sendKeyToServer(
  registration: ServiceWorkerRegistration,
  recursiveCount: number
) {
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
    if (recursiveCount < retryCount) {
      sendKeyToServer(registration, recursiveCount + 1);
    }
  }
}
